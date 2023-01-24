import SecondaryWhiteButton from "@/components/button/SecondaryWhiteButton";
import PrimaryButton from "../../button/PrimaryButton";
import IconLogin from "../../icon/IconLogin";
import IconPerson from "../../icon/IconPerson";

export default function Nav() {
    return <nav className="bg-[#3333334D] fixed z-40 w-full flex py-[23px] px-[100px]">
        <span className="text-system font-bold my-auto">LOGO</span>
        <div className="flex ml-auto">
            <SecondaryWhiteButton className="flex gap-[12px]">
                <IconPerson />
                <span className="my-auto">Login</span>
            </SecondaryWhiteButton>
            <PrimaryButton className="text-white flex ml-[24px] gap-[12px]">
                <IconLogin />
                <span className="my-auto">Sign Up</span>
            </PrimaryButton>
        </div>
    </nav>
}