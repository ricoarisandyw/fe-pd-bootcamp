import React from 'react'
import { create } from 'zustand'

interface TypeModalState {
    show: boolean
    children?: React.ReactNode
    showModal: (children: React.ReactNode) => void
    hideModal: () => void
}

const useModal = create<TypeModalState>((set) => ({
    show: false,
    showModal: (children) => set({ children, show: true }),
    hideModal: () => {
        set({ show: false })
    }
}))

export default useModal