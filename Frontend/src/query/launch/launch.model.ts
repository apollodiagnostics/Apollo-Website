export interface Launch {
  details: string
  id: string
  launch_year: string
  mission_id: string[]
  mission_name: string
}

export interface LaunchData {
  launches: Launch[]
}
