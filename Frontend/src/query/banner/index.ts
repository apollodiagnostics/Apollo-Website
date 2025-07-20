import { Pages } from '@models'
import { BannerData } from './banner.model'

const banner: Record<Pages, BannerData> = {
  home: {
    image: '',
    heading: 'Home Banner',
  },
  aboutUs: {
    image: '',
    heading: 'About Us........',
  },
}

export const getBanner = async (pageName: Pages): Promise<BannerData> => {
  const p = new Promise<BannerData>((resolve) => {
    resolve(banner[pageName])
  })
  return p
}
