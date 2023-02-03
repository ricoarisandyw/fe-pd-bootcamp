'use client';

import IconLeftArrow from "@/components/icon/IconArrowLeft";
import useLightNav from "@/components/pages/public/hooks/custom-header/useLightNav";
import ItemSearchVenue from "@/components/pages/venue/ItemSearchVenue";
import TVenue from "@/components/types/TVenue";
import ObjectUtils from "@/utils/ObjectUtils";

export default function VenuePage() {
    useLightNav()

    return <div className="pt-[130px] max-w-[1260px] mx-auto">
        <div className="flex">
            <IconLeftArrow />
            <span className="font-inter font-medium text-[18px] ml-5 underline">64 result in search</span>
        </div>
        {ObjectUtils.multiply(5, { title: "Outdoor", priceMin: 1000, priceMax: 2000 } as TVenue).map((data) => 
            <ItemSearchVenue key={data.title} {...data} />)}
    </div>
}