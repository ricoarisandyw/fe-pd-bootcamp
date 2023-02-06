'use client'

import SecondaryWhiteButton from "@/components/button/SecondaryWhiteButton";
import FormLogin from "@/components/form/FormLogin";
import FormSignUp from "@/components/form/FormSignUp";
import IconPersonPink from "@/components/icon/IconPersonPink";
import { useRouter } from "next/navigation";
import PrimaryButton from "../../button/PrimaryButton";
import IconLogin from "../../icon/IconLogin";
import IconPerson from "../../icon/IconPerson";
import useModal from "./hooks/useModal";
import useNavStore from "./hooks/useNavStore";

export default function Nav() {
    const router = useRouter()

    const { showModal } = useModal()
    const { navStyle, isUseWhiteLoginButton } = useNavStore()

    const handleClickSignup = () => showModal(<FormSignUp />)
    const handleClickLogin = () => showModal(<FormLogin />)

    return <nav className="border border-solid border-[#FFA48F26] fixed z-40 w-full flex py-[23px] px-[100px]" style={{
        ...navStyle,
        background: navStyle.background || '#3333334D'
    }}>
        <span onClick={() => router.push('/')} className="cursor-pointer text-system font-bold my-auto">LOGO</span>
        <div className="flex ml-auto">
            {isUseWhiteLoginButton ? <SecondaryWhiteButton onClick={handleClickLogin} className="flex gap-[12px] !border-system text-system">
                <IconPersonPink />
                <span className="my-auto">Login</span>
            </SecondaryWhiteButton> : <SecondaryWhiteButton onClick={handleClickLogin} className="flex gap-[12px]">
                <IconPerson />
                <span className="my-auto">Sign Up</span>
            </SecondaryWhiteButton>}

            <PrimaryButton className="text-white flex ml-[24px] gap-[12px]" onClick={handleClickSignup}>
                <IconLogin />
                <span className="my-auto">Sign Up</span>
            </PrimaryButton>
        </div>
    </nav>
}