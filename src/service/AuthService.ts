
import config from "@/utils/config";
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
    }>(config.API_URL + "/register", {
        method: "POST",
        body: JSON.stringify(body)
    }),

    login: (body: ReqBase<{
        email: string
        password: string
    }>) => AppFetch(config.API_URL + "/login", {
        method: "POST",
        body: JSON.stringify(body)
    })
}

export default AuthService