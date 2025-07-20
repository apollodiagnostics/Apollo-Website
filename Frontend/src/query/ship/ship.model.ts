export interface Ship {
  id: string
  model: string | null
  name: string
  type: string
  status: string | null
  home_port: string
  image: string
}

export interface ShipData {
  ships: Ship[]
}
