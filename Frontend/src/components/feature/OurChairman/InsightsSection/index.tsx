import { Insights, InsightsData } from '@components/entities'

export type InsightsSectionProps = InsightsData

export function InsightsSection(props: InsightsSectionProps) {
  return <Insights {...props} />
}
