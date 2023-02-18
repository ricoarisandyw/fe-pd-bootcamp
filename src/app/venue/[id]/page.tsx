'use client';

import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import IconCoin from "@/components/icon/IconCoin";
import IconMessage from "@/components/icon/IconMessage";
import IconMessagePink from "@/components/icon/IconMessagePink";
import IconUsers from "@/components/icon/IconUsers";
import useLightNav from "@/components/pages/public/hooks/custom-header/useLightNav";
import VenueService from "@/service/VenueService";
import StringUtils from "@/utils/StringUtils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import 'react-quill/dist/quill.snow.css';
import useSWR from 'swr';

export default function DetailVenue() {
    useLightNav()
    const path = usePathname()
    const id = path ? +path : 0
    const { data } = useSWR(`/getVenue/${path}`, () => VenueService.getVenuePackageDetail(id))

    return <div className="pt-[90px] mx-auto bg-[#F8F8F8]">
        <div className="mt-[]">
            {data?.data.package.thumbnailUrl && <Image src={data?.data.package.thumbnailUrl} alt="venue" height={500} width={500} className="w-full h-[732px] object-cover" />}
        </div>
        <div className="max-w-[1260px] pt-[60px] mx-auto">
            <div className="text-[32px] font-semibold">
                {data?.data.package.name}
            </div>
            <div className="flex">
                <div className="text-[22px] mt-3 font-semibold flex-1">
                    {data?.data.package.venueName}
                </div>
                <div className="flex">
                    <span className="my-auto"><IconCoin /></span>
                    <span className="my-auto ml-2 text-[20px] font-bold">Rp {StringUtils.parseNominal(data?.data.package.price || 0)}</span>
                    <span className="my-auto ml-2">
                        <IconUsers />
                    </span>
                    <span className="my-auto text-[#BDBDBD] ml-2">{data?.data.package.capacity}</span>
                </div>
            </div>
            <div className="mt-4 border-0 border-b border-solid border-[#E0E0E0]">
            </div>
            <div className="mt-12 text-[#828282]">
                {/* GENERATED USING QUILLJS */}
                <div dangerouslySetInnerHTML={{
                    __html: data?.data.package.description || ""
                }} />
            </div>
            <div className="mt-10 border-0 border-b border-solid border-[#E0E0E0]"></div>
            <div className="flex overflow-x-scroll gap-6 mt-10">
                {data?.data.package.gallery.map((img, i) => <Image key={i} src={img} height={348} width={615} alt="" className="rounded-[20px] w-[615px] object-cover" />)}
            </div>
        </div>
        <div className="shadow-lg w-full flex bg-white mt-[114px]">
            <div className="mx-auto max-w-[1260px] pt-[24px] pb-[40px] flex-1 flex">
                <div>
                    <div className="text-[22px] font-semibold text-[#828282]">Venue Price</div>
                    <div className="text-[32px] font-extrabold mt-3">Rp {StringUtils.parseNominal(data?.data.package.price)}</div>
                </div>
                <div className="flex ml-auto max-h-[44px] my-auto">
                    <SecondaryButton className="flex gap-3">
                        <IconMessagePink /> Chat Admin
                    </SecondaryButton>
                    <PrimaryButton className="ml-6 max-h-[44px] flex gap-3 text-white">
                        <IconMessage /> Pesan Venue
                    </PrimaryButton>
                </div>
            </div>
        </div>
    </div>
}