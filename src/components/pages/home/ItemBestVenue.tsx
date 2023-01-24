import IconStarGray from "@/components/icon/IconStarGray"
import IconStar from "@/components/icon/IconStart"
import Image from "next/image"

interface ItemBestVenueProps {
    venueName: string
    star: number
    reviews: number
    image: string
}

export default function ItemBestVenue(props: ItemBestVenueProps) {
    return <div>
        <div className="w-full h-[316px] rounded-[16px] relative overflow-hidden">
            <Image src={props.image} alt={"venue-image"} fill style={{
                objectFit: "cover"
            }} />
        </div>
        <div className="mt-[9px] font-semibold text-[24px] leading-[29px] font-inter">
            {props.venueName}
        </div>
        <div className="flex mt-[13px]">
            <div className="flex gap-x-[6px]">
                {Array.from(Array(props.star)).map((_, i) => <IconStar key={"yellow-star-" + i} />)}
                {Array.from(Array(5 - props.star)).map((_, i) => <IconStarGray key={"gray-star-" + i} />)}
            </div>
            <span className="text-[#828282] text-[16px] font-medium ml-[10px]">(110+ reviews)</span>
        </div>
    </div>
}