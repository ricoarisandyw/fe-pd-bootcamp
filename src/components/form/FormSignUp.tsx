'use client';

import AuthService from "@/service/AuthService";
import ObjectUtils from "@/utils/ObjectUtils";
import useWaiter from "@/utils/useWaiter";
import ValidationUtils from "@/utils/ValidationUtils";
import { Field, Formik } from "formik";
import { useState } from "react";
import PrimaryButton from "../button/PrimaryButton";

const initialValue = {
    email: "",
    fullname: "",
    password: "",
    isSubscribe: false
}

export default function FormSignUp() {
    const waiter = useWaiter()
    const [isValid, setValid] = useState(false)
    const [isPasswordInvalid, setPasswordInvalid] = useState(false)

    const handleSubmit = (value: typeof initialValue) => {
        waiter.do.load();
        setTimeout(() => {
            AuthService.register({
                data: {
                  email: 'arisandyrico@gmail.com',
                  fullname: 'ricoaw',
                  password: "12341234"
                }
            }).then(() => {
                waiter.do.finish()
            }).catch(() => {
                waiter.do.error()
            })
        }, 3000)
    }

    const handleValidation = (value: typeof initialValue) => {
        const error = {}
        if(ValidationUtils.isEmpty(value.email)) ObjectUtils.set(error, 'email', 'please fill this field')
        if(ValidationUtils.isEmpty(value.fullname)) ObjectUtils.set(error, 'fullname', 'please fill this field')

        // password validation
        if(ValidationUtils.isEmpty(value.password)) ObjectUtils.set(error, 'password', 'please fill this field')
        else if (!ValidationUtils.containCharacter(value.password)) ObjectUtils.set(error, 'password', 'password must contain character')
        else if (!ValidationUtils.containNumber(value.password)) ObjectUtils.set(error, 'password', 'password must contain number')
        else if (value.password.length < 12) ObjectUtils.set(error, 'password', 'password must at least 12 character')

        if(Object.keys(error).length) setValid(false)
        else setValid(true)

        return error
    }

    return <Formik onSubmit={handleSubmit} validate={handleValidation} initialValues={initialValue}>
        {formik => <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-[32px] font-avenir max-w-[643px]">
            <div className="text-[32px] font-black font-avenir">
                Create Bridge account
            </div>
            <div>
                <div className="text-[16px] font-black">Email</div>
                <Field placeholder="Your email" name="email" className={(formik.errors.email && "border-error") + " w-full border border-[#E0E0E0] px-[16px] py-[13px] text-[16px] rounded-[8px] mt-[8px]"} />
                {formik.errors.email && <span className="text-error">{formik.errors.email}</span>}
            </div>
            <div>
                <div className="text-[16px] font-black">Fullname</div>
                <Field placeholder="Your fullname" name="fullname" className={(formik.errors.email && "border-error") + " w-full border border-[#E0E0E0] px-[16px] py-[13px] text-[16px] rounded-[8px] mt-[8px]"} />
                {formik.errors.fullname && <span className="text-error">{formik.errors.fullname}</span>}
            </div>
            <div>
                <div className="text-[16px] font-black">Password</div>
                <Field type="password" placeholder="minimal 12 character, numbers & letters combinations" name="password" className={`${(formik.errors.password || isPasswordInvalid) ? 'border-error' : 'border-[#E0E0E0]'} w-full border px-[16px] py-[13px] text-[16px] rounded-[8px] mt-[8px]`} />
                {formik.errors.password && <span className="text-error">{formik.errors.password}</span>}
                {isPasswordInvalid && <span className="text-error">your password is invalid</span>}                
            </div>
            <div className="mt-[calc(32px - 44px)] flex">
                <Field type="checkbox" className="border rounded-[4px] w-[20px] h-[20px]" />
                <span className="ml-[12px]">Get email from our teams, to received venue updates, news, promo, and events. <a className="text-system">Privacy Policy</a></span>
            </div>
            <PrimaryButton type="submit" disabled={waiter.status.loading} className={`!rounded-[8px] text-white py-[16px] font-inter font-medium text-[16px] ${!isValid && 'bg-[#E0E0E0]'} ${waiter.status.loading && "bg-gray-400 cursor-not-allowed"}`}>
                {waiter.status.loading ? "Please wait . . ." : "Create Account"}
            </PrimaryButton>
        </form>}
    </Formik>
}