'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Divider, Grid } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@components/common'
import { CommonInput } from '@components/common/FormComponent/CommonInput'
import GenerateOTP from '@components/common/GenerateOTP'
import { PopOverSection } from '@components/common/PopOverSection'
import { downloadReport } from '@utils/api/dashboard'
import { CustomStyles, getStyles } from '@utils/styles'
import { useSnackbar } from 'src/providers/alerts-state-management'
import defaultStyle, { StylesClassNames } from './styles'

type DownloadReportForm = {
  username: string
  password: string
}

type Props = {
  customStyles?: CustomStyles<StylesClassNames>
}

export function DownloadReportBy({ customStyles }: Props) {
  const styles = getStyles(defaultStyle, customStyles)
  const { showSnackbar } = useSnackbar()
  const [loading, setLoading] = useState<boolean>(false)
  const { push } = useRouter()

  const form = useForm<DownloadReportForm>({
    mode: 'onChange',
  })

  const { handleSubmit, reset } = form
  const onSubmit = (data: DownloadReportForm): void => {
    setLoading(true)
    downloadReport(data.username, data.password)
      .then((response) => {
        push(response.data.message)
        showSnackbar('Downloading Report', 'success')
        setLoading(false)
        reset()
      })
      .catch(() => {
        showSnackbar('Invalid Credentials', 'warning')
        setLoading(false)
      })
  }

  return (
    <FormProvider {...form}>
      <PopOverSection
        heading="Download report by Mobile Number"
        customStyles={{
          popOverSection: styles('popOverSection').sx,
          childrenWrapper: styles('popupWrapper').sx,
        }}
      >
        <GenerateOTP
          placeHolder="Mobile Number"
          customStyles={{
            wrapper: styles('inputBar').sx,
            button: styles('generateOtpButton').sx,
          }}
        />
        <Divider>or</Divider>
        <Box component="form" {...styles('inputWrapper')}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CommonInput
                label="Username*"
                name="username"
                placeholder="Username"
                customStyles={{
                  wrapper: styles('inputContainer').sx,
                  input: styles('input').sx,
                }}
                rules={{
                  required: 'Username is required',
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CommonInput
                label="Password*"
                name="password"
                placeholder="Password"
                customStyles={{
                  wrapper: styles('inputContainer').sx,
                  input: styles('input').sx,
                }}
                rules={{
                  required: 'Password is required',
                }}
                type="password"
              />
            </Grid>
          </Grid>
        </Box>
        <Box {...styles('buttonWrapper')}>
          <Button
            label="Download"
            variant="contained"
            customStyles={{ button: styles('button').sx }}
            onClick={handleSubmit(onSubmit)}
            loading={loading}
          />
        </Box>
      </PopOverSection>
    </FormProvider>
  )
}
