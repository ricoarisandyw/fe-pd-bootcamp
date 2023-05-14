
import AppFetch from "./core/Service";
import { ReqBase } from "./core/types";

const AuthService = {
    register: (body: ReqBase<{
        email: string
        fullname: string
        password: string
    }>) => AppFetch<{
        account: {
            email: string
            fullname: string
            accessToken: string
        }
    }>("/register", {
        method: "POST",
        body: JSON.stringify(body)
    }),

    login: (body: ReqBase<{
        email: string
        password: string
    }>) => AppFetch<{
        account: {
            email: string
            fullname: string
            accessToken: string
        }
    }>("/login", {
        method: "POST",
        body: JSON.stringify(body)
    })
}

export default AuthService