import IconChat from "@/components/icon/IconChat";
import IconGlobe from "@/components/icon/IconGlobe";
import IconHearth from "@/components/icon/IconHearth";
import IconInstagram from "@/components/icon/IconInstagram";
import IconMail from "@/components/icon/IconMail";
import IconPhone from "@/components/icon/IconPhone";
import IconUsers from "@/components/icon/IconUsers";
import VenueService from "@/service/VenueService";
import Venue from "@/types/model/Venue";
import StringUtils from "@/utils/StringUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from 'swr';
import useModal from "../public/hooks/useModal";

export default function PreviewVenue(venue: Venue) {
    const router = useRouter()
    const { hideModal } = useModal()
    const { data } = useSWR(`getVenue/${venue.id}`, () => VenueService.getVenueDetail(venue.id))

    const handleClickVenue = () => {
        hideModal()
        router.push('/venue/id')
    }

    return <div>
        <div className="flex">
            <div className="w-[100px] h-[100px] rounded-full border border-[#F2F2F2] flex">
                {data?.data.venue.logo && <Image src={data?.data.venue.logo} width={67} height={67} alt="venue-logo" className="m-auto" />}
            </div>
            <div className="ml-6 flex-1">
                <div className="text-[32px] font-semibold">
                    {data?.data.venue.name}
                </div>
                <div className="text-[18px] text-[#BDBDBD] font-semibold mt-[3px]">
                    {data?.data.venue.address}
                </div>
            </div>
            <div>
                <button className="bg-system h-[48px] rounded-full px-5 py-3 flex">
                    <span className="my-auto">
                        <IconChat />
                    </span>
                    <span className="ml-2 text-white my-auto">
                        Chat Admin
                    </span>
                </button>
            </div>
        </div>
        <div className="border-b border-[#E0E0E0] w-full" />
        <div className="w-full justify-center flex gap-4 py-4">
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconGlobe />
                {data?.data.venue.website}
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconPhone />
                {data?.data.venue.phone}
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconMail />
                {data?.data.venue.email}
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconInstagram />
                {data?.data.venue.instagram}
            </div>
        </div>
        <div className="border-b border-[#E0E0E0] w-full" />
        <div className="mt-8">
            <div className="text-[22px] font-semibold">
                Detail hotel
            </div>
            <div className="mt-4">
                <p className="text-[#828282] text-[18px]">
                    {StringUtils.getTextFromHtml(data?.data.venue.description || "")}
                </p>
            </div>
            {data?.data.venue.categories.map((category) => <>
                <div className="mt-12 text-[22px] font-semibold">
                    {category.description}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-5">
                    {category.packages.map((pack, i) => (
                        <div onClick={handleClickVenue} key={i} className="cursor-pointer shadow-card border border-solid border-[#E0E0E0] rounded-[20px] h-[312px] w-full overflow-hidden relative">
                            <Image src={pack.thumbnailUrl} alt="thumbnail" width={566} height={210} className="w-full object-cover" />
                            <div className="flex pt-[18px] pb-[27px] px-6 absolute left-0 bottom-0 bg-white w-full">
                                <div className="flex-1">
                                    <div className="text-[20px] font-bold">
                                        {pack.name}
                                    </div>
                                    <div className="flex mt-[5px]">
                                        <span className="text-[#828282]">Rp {StringUtils.parseNominal(pack.price)}</span>
                                        <span className="ml-2 my-auto">
                                            <IconUsers />
                                        </span>
                                        <span className="text-[#BDBDBD] ml-1.5">
                                            {pack.capacity}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex my-auto">
                                    <IconHearth />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>)}
        </div>
    </div>
}