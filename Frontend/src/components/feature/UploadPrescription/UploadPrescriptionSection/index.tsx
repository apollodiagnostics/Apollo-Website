'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Dialog, Input, List, ListItem, Typography } from '@mui/material'
import axios from 'axios'
import { useMutationQuery } from '@hooks'
import {
  Button,
  ButtonProps,
  Image,
  UploadPopUp,
  UploadPopUpData,
} from '@components/common'
import { ImageProps } from '@components/common/Image'
import { uploadPrescriptionFile } from '@utils/api/dashboard'
import { ROUTES } from '@utils/api/routes'
import { getStyles } from '@utils/styles'
import { QueryUploadPrescription } from 'src/models/query.models'
import { useSnackbar } from 'src/providers/alerts-state-management'
// import { useDrawerState } from 'src/providers/drawer-state-management'
import { useDrawerState } from 'src/providers/drawer-state-management'
import { useUserState } from 'src/providers/login-state-management'
import defaultStyles from './styles'

export type UploadOption = {
  icon: ImageProps
  label: string
}

export type UploadPrescriptionProps = {
  authenticate: {
    icon: ImageProps
    heading: string
    previewImage: ImageProps
    DoAndDont: string[]
  }
  upload: {
    icon: ImageProps
    heading: string
    gallery: UploadOption
    camera: UploadOption
    uploadbutton: ButtonProps
    uploaded: {
      leftIcon: ImageProps
      rightIcon: ImageProps
    }
  }
  popUp: UploadPopUpData
}

export function UploadPrescription({
  authenticate,
  upload,
  popUp,
}: UploadPrescriptionProps) {
  const styles = getStyles(defaultStyles)

  const [image, setImage] = useState({ src: '' })
  const [file, setFile] = useState<File | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [uploading, setUploading] = useState<boolean>(false)
  const { userDetails } = useUserState()
  const { showSnackbar } = useSnackbar()
  const { setDrawer } = useDrawerState()
  const router = useRouter()
  const { mutateAsync } = useMutationQuery({
    method: 'post',
    service: 'DATA_CLIENT',
    url: ROUTES.Prescription,
    options: {
      onSuccess: (res: QueryUploadPrescription) => {
        if (res.statusCode === 201) {
          showSnackbar(
            'File uploaded successfully, Our team will contact you shortly to book the tests.',
            'success'
          )
          setUploading(false)
          router.push('/')
        }
      },
      onError: (res: QueryUploadPrescription) => {
        showSnackbar(res.message, 'error')
        setUploading(false)
      },
    },
  })

  const handlePopUpClose = () => {
    setOpen(false)
  }

  const handleConfirm = async (value: boolean) => {
    if (!userDetails?.accessToken) {
      showSnackbar('Please login to upload prescription', 'warning')
      return
    }

    try {
      if (file) {
        setUploading(true)
        const response = await uploadPrescriptionFile(file)
        if (response.statusCode === 200 && userDetails.profileId) {
          void mutateAsync({
            profileId: parseInt(userDetails.profileId, 10),
            image_url: response.data.uploadedFiles[0].fileUrl,
          })
        }
      }
    } catch (error) {
      setUploading(false)
      if (axios.isAxiosError(error)) {
        const { response } = error
        showSnackbar(response?.data.message, 'error')
      }
    }
    setOpen(value)
    setImage({ src: '' })
    setFile(null)
  }

  const uploadHandler = () => {
    if (file) {
      setOpen(true)
    } else {
      showSnackbar('Please select image', 'warning')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadItem = event.target.files?.[0]
    if (uploadItem) {
      setImage({
        src: URL.createObjectURL(uploadItem),
      })
      setFile(uploadItem)
    }
  }

  const onCloseHandler = () => {
    setImage({ src: '' })
    setFile(null)
  }

  useEffect(() => {
    if (!userDetails?.accessToken) {
      setDrawer(2)
    } else {
      setDrawer(0)
    }
  }, [userDetails])
  // Removed by Client

  return (
    <Box {...styles('wrapper')}>
      <Box {...styles('previewSection')}>
        <Box {...styles('authHeader')}>
          <Image
            {...authenticate.icon}
            fill
            customStyles={{ wrapper: styles('cartIcon').sx }}
          />
          <Typography {...styles('authHeading')}>
            {authenticate.heading}
          </Typography>
        </Box>

        <Box {...styles('preview')}>
          <Image
            src={image.src ? image.src : authenticate.previewImage.src}
            alt="preview image"
            fill
            customStyles={{ wrapper: styles('previewImage').sx }}
          />

          <List {...styles('doAndDont')}>
            {authenticate.DoAndDont.map((item) => {
              return (
                <ListItem {...styles('list')} key={item}>
                  {item}
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Box>

      <Box {...styles('uploadSection')}>
        <Box {...styles('authHeader')}>
          <Image
            {...upload.icon}
            customStyles={{ wrapper: styles('cartIcon').sx }}
            fill
          />
          <Typography {...styles('authHeading')}>{upload.heading}</Typography>
        </Box>
        {!file && (
          <Box>
            <label htmlFor="galleryInput">
              <Box {...styles('uploadOption')}>
                <Input
                  type="file"
                  inputProps={{ accept: 'image/*' }}
                  id="galleryInput"
                  style={{ display: 'none' }}
                  onChange={handleInputChange}
                />
                <Image
                  {...upload.gallery.icon}
                  customStyles={{ wrapper: styles('uploadOptionIcon').sx }}
                  fill
                />
                <Typography {...styles('uploadOptionText')}>
                  {upload.gallery.label}
                </Typography>
              </Box>
            </label>

            <Box {...styles('cameraLabel')}>
              <label htmlFor="cameraInput">
                <Box {...styles('uploadOption')}>
                  <Input
                    type="file"
                    id="cameraInput"
                    inputProps={{ accept: 'image/*', capture: 'user' }}
                    style={{ display: 'none' }}
                    onChange={handleInputChange}
                  />
                  <Image
                    {...upload.camera.icon}
                    customStyles={{ wrapper: styles('uploadOptionIcon').sx }}
                    fill
                  />
                  <Typography {...styles('uploadOptionText')}>
                    {upload.camera.label}
                  </Typography>
                </Box>
              </label>
            </Box>
          </Box>
        )}
        {file && (
          <Box {...styles('uploadOption')}>
            <Image
              {...upload.uploaded.leftIcon}
              customStyles={{ wrapper: styles('uploadOptionIcon').sx }}
              fill
            />
            <Typography {...styles('uploadOptionText')}>{file.name}</Typography>
            <Box onClick={onCloseHandler}>
              <Image
                {...upload.uploaded.rightIcon}
                customStyles={{ wrapper: styles('crossIcon').sx }}
                fill
              />
            </Box>
          </Box>
        )}

        <Button
          {...upload.uploadbutton}
          onClick={uploadHandler}
          customStyles={{ button: styles('uploadButton').sx }}
        />
      </Box>
      <Dialog open={open} onClose={handlePopUpClose}>
        <UploadPopUp {...popUp} onConfirm={handleConfirm} loading={uploading} />
      </Dialog>
    </Box>
  )
}
