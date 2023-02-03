import { useEffect } from "react";
import useNavStore from "../useNavStore";

export default function useLightNav(){
    const { set } = useNavStore()

    useEffect(() => {
        set({
            isUseWhiteLoginButton: true,
            navStyle: {
                background: "white"
            }
        })
    }, [set])
}