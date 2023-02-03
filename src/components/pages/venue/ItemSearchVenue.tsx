import IconDollar from "@/components/icon/IconDollar";
import IconStarGray from "@/components/icon/IconStarGray";
import IconStar from "@/components/icon/IconStart";
import TVenue from "@/components/types/TVenue";
import Image from "next/image";
import useModal from "../public/hooks/useModal";
import PreviewVenue from "./PreviewVenue";

export default function ItemSearchVenue(venue: TVenue){
    const { showModal } = useModal()

    const handleClick = () => {
        showModal(<PreviewVenue {...venue} />, {
            borderRadius: "0px",
            maxWidth: '1260px'
        })
    }

    return <div className="cursor-pointer" onClick={handleClick}>
    <div className="grid grid-cols-2 mt-8 gap-6 h-[446px]">
        <Image src={'/images/venue.png'} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[inherit] object-cover" />
        <div className="grid grid-rows-2 gap-[14px] h-[inherit]">
            <Image src={'/images/venue.png'} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[-webkit-fill-available] object-cover" />
            <Image src={'/images/venue.png'} alt={'venue-image'} width={704} height={446} className="rounded-[16px] w-full h-[-webkit-fill-available] object-cover" />
        </div>
    </div>
    <div className="mt-8 flex">
        <div>
            <div className="text-[32px] font-semibold">
                Outdoor
            </div>
            <div className="flex">
                <IconDollar />
                <span className="text-[18px] font-semibold ml-2 mr-2">Rp30.000.000 - 50.000.000/day</span> • <span className="ml-2 text-[#828282] font-medium">500-1.000 person quota</span>
            </div>
        </div>
        <div className="ml-auto mt-[30px] flex">
            <div className="flex gap-[6px]">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStarGray />
            </div>
            <span className="text-[#828282]">{`(110+ reviews)`}</span>
        </div>
    </div>
</div>
}