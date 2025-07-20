import { OverView, OverViewData } from '@components/common'

export type OverViewSectionProps = OverViewData

export function OverviewSection({
  heading,
  description,
  image,
}: OverViewSectionProps) {
  return <OverView heading={heading} image={image} description={description} />
}
