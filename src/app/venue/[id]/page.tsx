'use client';

import PrimaryButton from "@/components/button/PrimaryButton";
import SecondaryButton from "@/components/button/SecondaryButton";
import IconCoin from "@/components/icon/IconCoin";
import IconMessage from "@/components/icon/IconMessage";
import IconMessagePink from "@/components/icon/IconMessagePink";
import IconUsers from "@/components/icon/IconUsers";
import useLightNav from "@/components/pages/public/hooks/custom-header/useLightNav";
import Image from "next/image";
import 'react-quill/dist/quill.snow.css';

export default function DetailVenue() {
    useLightNav()

    return <div className="pt-[90px] mx-auto bg-[#F8F8F8]">
        <div className="mt-[]">
            <Image src="/images/venue.png" alt="venue" height={500} width={500} className="w-full h-[732px] object-cover" />
        </div>
        <div className="max-w-[1260px] pt-[60px] mx-auto">
            <div className="text-[32px] font-semibold">
                Intimate Wedding Package
            </div>
            <div className="flex">
                <div className="text-[22px] mt-3 font-semibold flex-1">
                    by Shangri-La Surabaya
                </div>
                <div className="flex">
                    <span className="my-auto"><IconCoin /></span>
                    <span className="my-auto ml-2 text-[20px] font-bold">Rp 20.000.000</span>
                    <span className="my-auto ml-2">
                        <IconUsers />
                    </span>
                    <span className="my-auto text-[#BDBDBD] ml-2">200 orang</span>
                </div>
            </div>
            <div className="mt-4 border-0 border-b border-solid border-[#E0E0E0]">
            </div>
            <div className="mt-12 text-[#828282]">
                {/* GENERATED USING QUILLJS */}
                <p><strong>ON YOUR WEDDING NIGHT</strong></p><p><br /></p><p>• 1 (one) night stay in our Studio room including breakfast for 2 (two) persons on the following morning at Pavilion Restaurant</p><p>• 1 (one) night stay in our Deluxe Premium room including breakfast for 2 (two) persons on the following morning at Pavilion Restaurant</p><p><br /></p><p><strong>FOR YOUR WEDDING</strong></p><p><br /></p><p>• Buffet menu served for 70 (seventy) persons</p><p>• Complimentary 2 (two) kinds of food stalls for 70 (seventy) persons during the party</p><p>• Free flow mineral water and soft drinks to be served during the party</p><p>• Complimentary food tasting for 6 (six) persons maximum as menu confirmed (soup, carbohydrate, and main courses only), 1 (one) month before the wedding’s date</p><p>• A bottle of sparkling juice for toasting pyramid fountain</p><p>• 2 (two) hours usage of a function room for family room ceremony (based on room availability)</p><p>• Complimentary use of JW Marriott Surabaya’s poolside and lobby for photo shooting on the wedding’s day</p><p>• 6 (eight) reserved parking spaces for your wedding guest</p><p><br /></p><p><strong>FOR YOUR WEDDING</strong></p><p><br /></p><p>• Buffet menu served for 70 (seventy) persons</p><p>• Complimentary 2 (two) kinds of food stalls for 70 (seventy) persons during the party</p><p>• Free flow mineral water and soft drinks to be served during the party</p><p>• Complimentary food tasting for 6 (six) persons maximum as menu confirmed (soup, carbohydrate, and main courses only), 1 (one) month before the wedding’s date</p><p>• A bottle of sparkling juice for toasting pyramid fountain</p><p>• 2 (two) hours usage of a function room for family room ceremony (based on room availability)</p><p>• Complimentary use of JW Marriott Surabaya’s poolside and lobby for photo shooting on the wedding’s day</p><p>• 6 (eight) reserved parking spaces for your wedding guest</p><p><br /></p><p><strong>BENEFITS MARRIOTT BONVOY</strong></p><p><br /></p><p>• Be our special guest by joining Marriott Bonvoy Member and get special points to be redeemed for complimentary stays at selected Marriott brand hotels worldwide</p><p><br /></p><p><strong>AFTER PARTY Option</strong></p><p><br /></p><p>• 20% Discounts on Food &amp; Beverage*</p><p>*Join public – Every Friday &amp; Saturday at Basement with Live Band and DJ Performance</p>
            </div>
            <div className="mt-10 border-0 border-b border-solid border-[#E0E0E0]"></div>
            <div className="flex overflow-scroll gap-6 mt-10">
                {Array.from(Array(5)).map((_, i) => <Image key={i} src='/images/venue.png' height={348} width={615} alt="" className="rounded-[20px] w-[615px]" />)}
            </div>
        </div>
        <div className="shadow-lg w-full flex bg-white mt-[114px]">
            <div className="mx-auto max-w-[1260px] pt-[24px] pb-[40px] flex-1 flex">
                <div>
                    <div className="text-[22px] font-semibold text-[#828282]">Venue Price</div>
                    <div className="text-[32px] font-extrabold mt-3">Rp 20.000.000</div>
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