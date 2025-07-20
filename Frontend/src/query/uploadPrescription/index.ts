import { UploadPrescriptionData } from './uploadPrescription.model'

const uploadPage: UploadPrescriptionData = {
  uploadPrescriptionSection: {
    authenticate: {
      heading: 'How to authenticate your prescription',
      icon: {
        src: '/images/uploadPrescription/cartImage.png',
        alt: 'icon',
      },
      previewImage: {
        src: '/images/uploadPrescription/preview.png',
        alt: '',
      },
      DoAndDont: [
        "Don't  crop out any part of the image",
        'Avoid blurred image',
        'Include details of doctor and patient visit date.',
      ],
    },
    upload: {
      heading: 'Upload prescription ',
      icon: {
        src: '/images/uploadPrescription/uploadDocHeading.png',
        alt: 'gallery icon',
      },
      gallery: {
        label: 'Choose from gallery',
        icon: {
          src: '/images/uploadPrescription/uploadDocImage.png',
          alt: 'gallery icon',
        },
      },
      camera: {
        label: 'Open camera',
        icon: {
          src: '/images/uploadPrescription/cameraImage.png',
          alt: 'camera icon',
        },
      },
      uploadbutton: {
        label: 'Upload',
      },
      uploaded: {
        leftIcon: {
          src: '/images/uploadPrescription/uploadDocImage.png',
          alt: ' gallery icon',
        },
        rightIcon: {
          src: '/images/uploadPrescription/cross.png',
          alt: 'cross',
        },
      },
    },
    popUp: {
      image: {
        src: '/images/uploadPrescription/uploadDocHeading.png',
        alt: 'upload icon',
      },
      heading: 'Prescription Upload',
      description:
        "We will make sure to call you back as soon as possible, you don't have to wait long.",
      button2: {
        label: 'Continue',
      },
    },
  },
}

export const getUploadPrescriptionPageData =
  async (): Promise<UploadPrescriptionData> => {
    const p = new Promise<UploadPrescriptionData>((resolve) => {
      resolve(uploadPage)
    })
    return p
  }
