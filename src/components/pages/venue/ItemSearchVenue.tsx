import IconDollar from "@/components/icon/IconDollar";
import IconStarGray from "@/components/icon/IconStarGray";
import IconStar from "@/components/icon/IconStart";
import Venue from "@/types/model/Venue";
import StringUtils from "@/utils/StringUtils";
import Image from "next/image";
import useModal from "../public/hooks/useModal";
import PreviewVenue from "./PreviewVenue";

export default function ItemSearchVenue(venue: Venue) {
    const { showModal } = useModal()

    const handleClick = () => {
        showModal(<PreviewVenue {...venue} />, {
            borderRadius: "0px",
            maxWidth: '1260px'
        })
    }

    return <div className="cursor-pointer" onClick={handleClick}>
        <div className="grid grid-cols-2 mt-8 gap-6 h-[446px]">
            <Image src={venue.thumbnailUrl} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[inherit] object-cover" />
            <div className="grid grid-rows-2 gap-[14px] h-[inherit]">
                <Image src={venue.gallery[0]} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[-webkit-fill-available] object-cover" />
                <Image src={venue.gallery[1]} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[-webkit-fill-available] object-cover" />
            </div>
        </div>
        <div className="mt-8 flex">
            <div>
                <div className="text-[32px] font-semibold">
                    {venue.name}
                </div>
                <div className="flex">
                    <IconDollar />
                    <span className="text-[18px] font-semibold ml-2 mr-2 my-auto">Rp{StringUtils.parseNominal(venue.minPrice)} - {StringUtils.parseNominal(venue.maxPrice)}/day</span> • <span className="ml-2 my-auto text-[#828282] font-medium">{venue.capacity}</span>
                </div>
            </div>
            <div className="ml-auto mt-[30px] flex">
                <div className="flex gap-[6px]">
                    {Array.from(Array(Math.floor(venue.star))).map((_,i) => <IconStar key={`${i}start`} />)}
                    {Array.from(Array(Math.floor(5 - venue.star))).map((_,i) => <IconStarGray key={`${i}start`} />)}
                </div>
                <span className="text-[#828282]">{`(${StringUtils.parseReview(venue.reviewCount)} reviews)`}</span>
            </div>
        </div>
    </div>
}