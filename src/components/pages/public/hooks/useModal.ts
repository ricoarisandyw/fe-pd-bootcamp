import React from 'react'
import { create } from 'zustand'

interface TypeModalState {
    show: boolean
    modalStyle: React.CSSProperties
    children?: React.ReactNode
    showModal: (children: React.ReactNode, modalStyle?: React.CSSProperties) => void
    hideModal: () => void
}

const useModal = create<TypeModalState>((set) => ({
    show: false,
    showModal: (children, modalStyle) => set({ children, show: true, modalStyle: modalStyle ? modalStyle : {} }),
    hideModal: () => {
        set({ show: false })
    },
    modalStyle: {},
}))

export default useModal