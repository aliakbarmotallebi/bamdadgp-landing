import { create } from "zustand";

const useModalStore = create((set)=>({
    isOpen:false,
    contentModal:'',
    setIsOpen: (val)=>set({isOpen:val}),
    setContentModal:(val)=>set({contentModal:val}),
    onClose : ()=>set(state=>({isOpen:false})),
}))

export default useModalStore;