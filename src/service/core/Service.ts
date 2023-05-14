
import config from "@/utils/config";
import { ResBase } from "./types";

type BaseMeta =  { status?: string, code?: string, message?: string }

async function AppFetch<Res, Meta extends BaseMeta = {}>(url: string, options?: RequestInit){
    try {
        const response = await fetch(config.API_URL + url, options);
        if (!response.ok && response.status !== 200) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data: ResBase<Res, Meta> = await response.json();
        return data;
    } catch (error) {
        console.log({error});
        return null;
    }
}

export async function AuthFetch<Res, Meta extends BaseMeta = {}>(url: string, options?: RequestInit){
   const optionsWithToken = options || {}
   const loadAccount = localStorage.getItem("user")
   if(loadAccount) {
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