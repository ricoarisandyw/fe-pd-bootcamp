import IconChat from "@/components/icon/IconChat";
import IconGlobe from "@/components/icon/IconGlobe";
import IconHearth from "@/components/icon/IconHearth";
import IconInstagram from "@/components/icon/IconInstagram";
import IconMail from "@/components/icon/IconMail";
import IconPhone from "@/components/icon/IconPhone";
import IconUsers from "@/components/icon/IconUsers";
import TVenue from "@/components/types/TVenue";
import ObjectUtils from "@/utils/ObjectUtils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useModal from "../public/hooks/useModal";

export default function PreviewVenue(venue: TVenue) {
    const router = useRouter()
    const { hideModal } = useModal()

    const handleClickVenue = () => {
        hideModal()
        router.push('/venue/id')
    }

    return <div>
        <div className="flex">
            <div className="w-[100px] h-[100px] rounded-full border border-[#F2F2F2] flex">
                <Image src={'/images/venue-logo.png'} width={67} height={67} alt="venue-logo" className="m-auto" />
            </div>
            <div className="ml-6 flex-1">
                <div className="text-[32px] font-semibold">
                    {venue.title}
                </div>
                <div className="text-[18px] text-[#BDBDBD] font-semibold mt-[3px]">
                    Jl. Mayjen Sungkono No.120, Pakis, Kec. Sawahan, Kota SBY, Jawa Timur 60256
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
                www.shangri-la.com
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconPhone />
                www.shangri-la.com
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconMail />
                www.shangri-la.com
            </div>
            <div className="flex text-[16px] text-[#828282] gap-2">
                <IconInstagram />
                www.shangri-la.com
            </div>
        </div>
        <div className="border-b border-[#E0E0E0] w-full" />
        <div className="mt-8">
            <div className="text-[22px] font-semibold">
                Detail hotel
            </div>
            <div className="mt-4">
                <p className="text-[#828282] text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Quam est malesuada tempus interdum quis in amet ipsum. Odio justo malesuada viverra mi semper nec porttitor eu nibh. Diam venenatis maecenas mattis ipsum id nascetur molestie duis etiam. 

Scelerisque maecenas gravida morbi bibendum in lectus. Sed sit a sit faucibus. Mauris maecenas eros eu quis turpis porttitor ultrices interdum egestas. Odio suspendisse enim imperdiet tempor accumsan vel blandit. Cras faucibus interdum facilisis quam vitae. 
                </p>
            </div>
            <div className="mt-12 text-[22px] font-semibold">
                Paket Senin, 24 Desember 2022
            </div>
            <div className="mt-8 grid grid-cols-2 gap-y-8 gap-x-5">
                {ObjectUtils.multiply(4, {}).map((_,i) => (
                    <div onClick={handleClickVenue} key={i} className="cursor-pointer shadow-card border border-solid border-[#E0E0E0] rounded-[20px] h-[312px] w-full overflow-hidden relative">
                        <Image src={'/images/venue.png'} alt="thumbnail" width={566} height={210} className="w-full object-cover" />
                        <div className="flex pt-[18px] pb-[27px] px-6 absolute left-0 bottom-0 bg-white w-full">
                            <div className="flex-1">
                                <div className="text-[20px] font-bold">
                                    Intimate Wedding Package
                                </div>
                                <div className="flex mt-[5px]">
                                    <span className="text-[#828282]">Rp 20.000.000</span>
                                    <span className="ml-2 my-auto">
                                        <IconUsers />
                                    </span>
                                    <span className="text-[#BDBDBD] ml-1.5">
                                        200 orang
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
        </div>
    </div>
}