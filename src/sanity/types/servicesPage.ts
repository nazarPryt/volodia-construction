export interface Service {
  icon: string
  title: string
  description: string
  details: string[]
  price: string
}

export interface ServicesPageData {
  services: Service[]
}
