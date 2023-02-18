import City from "./City"

export default interface Venue {
    id: number
    name: string
    minPrice: number
    maxPrice: number
    star: number
    reviewCount: number
    thumbnailUrl: string
    gallery: string[]
    city: City
    capacity: string
}