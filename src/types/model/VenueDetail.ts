import Package from "./Package"

export default interface VenueDetail {
    id: number
    name: string
    description: string
    website: string
    phone: string
    email: string
    instagram: string
    address: string
    logo: string
    categories: {
        description: string
        packages: Package[]
    }[]
}