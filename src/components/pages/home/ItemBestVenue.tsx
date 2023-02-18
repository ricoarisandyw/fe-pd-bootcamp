import IconStarGray from "@/components/icon/IconStarGray"
import IconStar from "@/components/icon/IconStart"
import Venue from "@/types/model/Venue"
import StringUtils from "@/utils/StringUtils"
import Image from "next/image"

// we use model for props because it purposely render those model UI
export default function ItemBestVenue(props: Venue) {
    return <div>
        <div className="w-full h-[316px] rounded-[16px] relative overflow-hidden">
            <Image src={props.thumbnailUrl} alt={"venue-image"} fill style={{
                objectFit: "cover"
            }} />
        </div>
        <div className="mt-[9px] font-semibold text-[24px] leading-[29px] font-inter">
            {props.name}
        </div>
        <div className="flex mt-[13px]">
            <div className="flex gap-x-[6px]">
                {Array.from(Array(props.star)).map((_, i) => <IconStar key={"yellow-star-" + i} />)}
                {Array.from(Array(5 - props.star)).map((_, i) => <IconStarGray key={"gray-star-" + i} />)}
            </div>
            <span className="text-[#828282] text-[16px] font-medium ml-[10px]">({StringUtils.parseReview(props.reviewCount)} reviews)</span>
        </div>
    </div>
}