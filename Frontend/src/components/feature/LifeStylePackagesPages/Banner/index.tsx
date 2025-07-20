import React from 'react'
import { PageBanner, PageBannerData } from '@components/entities'

export type BannerProps = PageBannerData

export function Banner(props: BannerProps) {
  return <PageBanner {...props} />
}
