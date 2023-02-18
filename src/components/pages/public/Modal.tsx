'use client';

import useModal from "./hooks/useModal";

export default function Modal(){
    const { show, hideModal, children, modalStyle } = useModal()

    return <div onClick={hideModal} className={(show ? "": "hidden") + " fixed top-0 left-0 z-50 bg-black bg-opacity-60 flex w-screen h-screen"}>
        <div className="overflow-overlay w-full rounded-[20px] bg-white py-[40px] px-[44px] m-auto max-w-[643px] max-h-[90vh]" onClick={(e)=> e.stopPropagation()} style={modalStyle}>
            {children}
        </div>
    </div>
}