'use client';

import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import IconLeftArrow from "@/components/icon/IconArrowLeft";
import IconCoin from "@/components/icon/IconCoin";
import IconMessage from "@/components/icon/IconMessage";
import IconMessagePink from "@/components/icon/IconMessagePink";
import IconUsers from "@/components/icon/IconUsers";
import useLightNav from "@/components/pages/public/hooks/custom-header/useLightNav";
import VenueService from "@/service/VenueService";
import StringUtils from "@/utils/StringUtils";
import useWaiter from "@/utils/useWaiter";
import dayjs from "dayjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import 'react-quill/dist/quill.snow.css';
import useSWR from 'swr';
export default function DetailVenue() {
    useLightNav()
    const orderWaiter = useWaiter()
    const path = usePathname()
    const id = path ? +(path.split('/').at(-1) || -1) : 0
    const { data } = useSWR(`/getVenue/${path}`, () => VenueService.getVenuePackageDetail(id))

    const handleBack = () => history.back()
    const handleChatAdmin = () => window.open("https://wa.me/"+data?.data.package.venuePhone, '_blank')
    const handleOrder = () => {
        orderWaiter.do.load()
        VenueService.order({
            data: {
                date: dayjs().format('YYYY-MM-DD'),
                packageId: id
            }
        }).then((res) => {
            orderWaiter.do.finish()
            if(res){
                alert(`Order ${res?.meta.message} 🎉`)
            } else {
                alert(`Order failed`)
            }
        }).catch(() => {
            orderWaiter.do.error()
        })
    }

    return <div className="pt-[90px] mx-auto bg-[#F8F8F8]">
        <div className="relative">
            <div onClick={handleBack} className="absolute w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center left-0 top-0 ml-[90px] mt-[30px] cursor-pointer">
                <IconLeftArrow />
            </div>
            {data?.data.package.thumbnailUrl && <Image src={data?.data.package.thumbnailUrl} alt="venue" height={500} width={500} className="w-full h-[732px] object-cover" />}
        </div>
        <div className="max-w-[1260px] pt-[60px] pb-[200px] mx-auto px-8">
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
        <div className="shadow-lg w-full flex bg-white mt-[114px] fixed bottom-0 left-0 px-8">
            <div className="mx-auto max-w-[1260px] pt-[24px] pb-[40px] flex-1 flex">
                <div>
                    <div className="text-[22px] font-semibold text-[#828282]">Venue Price</div>
                    <div className="text-[32px] font-extrabold mt-3">Rp {StringUtils.parseNominal(data?.data.package.price)}</div>
                </div>
                <div className="flex ml-auto max-h-[44px] my-auto">
                    <SecondaryButton className="flex gap-3" onClick={handleChatAdmin}>
                        <IconMessagePink /> Chat Admin
                    </SecondaryButton>
                    <PrimaryButton className="ml-6 max-h-[44px] flex gap-3 text-white" onClick={handleOrder}>
                        <IconMessage /> {orderWaiter.status.loading ? "Loading . . ." : "Pesan Venue"}
                    </PrimaryButton>
                </div>
            </div>
        </div>
    </div>
}