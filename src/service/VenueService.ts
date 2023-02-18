import Package from "@/types/model/Package";
import Venue from "@/types/model/Venue";
import VenueDetail from "@/types/model/VenueDetail";
import AppFetch from "./core/Service";
import { ReqBase } from "./core/types";

const VenueService = {
    getVenue: () => AppFetch<{
        venues: Venue[]
    }, {
        "message": string
        "page": number
        "totalPage": number
        "currentItems": number
        "totalItems": number
    }>("/venue"),

    getVenueDetail: (id: number) => AppFetch<{
        venue: VenueDetail
    }>(`/venue/${id}`),

    getVenuePackageDetail: (id: number) => AppFetch<{
        package: Package
    }>(`/venue/package/${id}`),

    order: (body: ReqBase<{
        packageId: number
        /**
         * @format YYYY-MM-DD
         */
        date: string
    }>) => AppFetch('/venue/package/order', {
        method: "POST",
        body: JSON.stringify(body)
    })
}

export default VenueService