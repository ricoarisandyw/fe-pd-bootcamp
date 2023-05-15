
import config from "@/utils/config";
import { ResBase } from "./types";

type BaseMeta = { status?: string, code?: string, message?: string }

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message
    return String(error)
}

async function AppFetch<Res, Meta extends BaseMeta = {}>(url: string, options?: RequestInit) {
    try {
        const response = await fetch(config.API_URL + url, options);
        const data: ResBase<Res, Meta> = await response.json();
        return data;
    } catch (error) {
        return null
    }
}

export async function AuthFetch<Res, Meta extends BaseMeta = {}>(url: string, options?: RequestInit) {
    const optionsWithToken = options || {}
    const loadAccount = localStorage.getItem("user")
    if (loadAccount) {
        const account = JSON.parse(loadAccount) as {
            account: {
                email: string
                fullname: string
                accessToken: string
            }
        }
        Object.assign(optionsWithToken, {
            headers: {
                Authorization: 'Bearer ' + account.account.accessToken
            }
        })
    }
    return AppFetch<Res, Meta>(url, optionsWithToken)
}

export default AppFetch