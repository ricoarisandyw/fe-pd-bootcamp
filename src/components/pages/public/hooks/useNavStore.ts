import React from "react";
import { create } from "zustand";

interface TypeHeader {
    isUseWhiteLoginButton: boolean
    navStyle: React.CSSProperties
    set: (value: Omit<TypeHeader, "set">) => void
}

const useNavStore = create<TypeHeader>((set) => ({
    isUseWhiteLoginButton: false,
    navStyle: {},
    set
}))

export default useNavStore