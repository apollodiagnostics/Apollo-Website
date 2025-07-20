import {
  StatsSection,
  StatsSectionData,
} from '@components/entities/StatsSection'

export type InsightsSectionProps = StatsSectionData

export function InsightsSection(props: InsightsSectionProps) {
  return <StatsSection {...props} />
}
