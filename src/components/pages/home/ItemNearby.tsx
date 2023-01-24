import Image from "next/image"

interface ItemNearbyProps{
    location: string
    venueSize: string
    image: string
}

export default function ItemNearby(props: ItemNearbyProps) {
    return <div className="flex">
        <Image src={props.image} alt={'venue-image'} width={90} height={90} className="rounded-[16px]" />
        <div className="ml-[24px] my-auto flex-1">
            <div className="text-[30px] font-black font-avenir">{props.location}</div>
            <div className="font-black text-[24px] mt-[2px] font-avenir text-[#828282]">{props.venueSize} venue</div>
        </div>
    </div>
}