import City from "@/types/model/City"
import AppFetch from "./core/Service"

const CityService = {
    getCity: () => AppFetch<{
        cities: City[]
    }>('/city'),

    nearby: () => AppFetch<{
        nearbies: {
            cityId: string
            cityName: string
            totalVenue: string
            thumbnailUrl: string
        }[]
    }>('/nearby')
}

export default CityService