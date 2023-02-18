'use client';

import IconLeftArrow from "@/components/icon/IconArrowLeft";
import useLightNav from "@/components/pages/public/hooks/custom-header/useLightNav";
import ItemSearchVenue from "@/components/pages/venue/ItemSearchVenue";
import VenueService from "@/service/VenueService";
import useSWR from "swr";

export default function VenuePage() {
    useLightNav()
    const { data } = useSWR("allVenue", () => VenueService.getVenue())

    return <div className="pt-[130px] max-w-[1260px] mx-auto">
        <div className="flex">
            <IconLeftArrow />
            <span className="font-inter font-medium text-[18px] ml-5 underline">{data?.meta.totalItems} result in search</span>
        </div>
        {data?.data.venues.map((venue) => 
            <ItemSearchVenue key={venue.name} {...venue} />)}
    </div>
}