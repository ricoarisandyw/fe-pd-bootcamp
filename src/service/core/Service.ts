
import config from "@/utils/config";
import { ResBase } from "./types";

async function AppFetch<Res, Meta = {}>(url: string, options?: RequestInit){
    try {
        const response = await fetch(config.API_URL + url, options);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const data: ResBase<Res, Meta> = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default AppFetch