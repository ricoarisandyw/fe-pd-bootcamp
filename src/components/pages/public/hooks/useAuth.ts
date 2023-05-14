import { create } from "zustand";

type User = {
    account: {
        email: string
        fullname: string
        accessToken: string
    }
}

export const useAuth = create<{
    user?: User
    isLoading: boolean
    isLoggedIn: boolean
    checkAuth: () => void
    setUser: (user: User) => void
    logout: () => void
}>((set) => ({
    checkAuth: () => {
        const user = localStorage.getItem('user')
        if (user) {
            set({
                isLoggedIn: true,
                isLoading: false,
                user: JSON.parse(user)
            })
        } else {
            set({
                isLoading: false,
            })
        }
    },
    isLoading: true,
    isLoggedIn: false,
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user))
        set({ user, isLoggedIn: true })
    },
    logout(){
        localStorage.removeItem('user')
        set({
            user: undefined,
            isLoggedIn:false
        })
    }
}))