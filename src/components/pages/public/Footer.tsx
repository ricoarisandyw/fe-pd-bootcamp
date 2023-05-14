import Image from "next/image";

export default function Footer(){
    return <footer className="fixed bottom-0 w-full py-[68px] px-[90px] flex bg-[#333333]">
        <div className="flex-1">
            <Image src='/images/logo.png' alt="logo" width={69} height={19} />
        </div>
        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[24px] text-[18px] text-white font-avenir">
            <div>Whatsapp</div>
            <div>Contact Us</div>
            <div>Facebook</div>
            <div>Careers</div>
            <div>Instagram</div>
            <div>Blog</div>
            <div>Twitter</div>
            <div>Help & Support</div>
        </div>
    </footer>
}