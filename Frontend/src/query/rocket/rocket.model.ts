export interface Rocket {
  active: boolean
  boosters: number
  company: string
  cost_per_launch: number
  country: string
  description: string
  first_flight: string
  id: string
  name: string
  stages: number
  success_rate_pct: number
  type: string
  wikipedia: string
}

export interface RocketData {
  rockets: Rocket[]
}
