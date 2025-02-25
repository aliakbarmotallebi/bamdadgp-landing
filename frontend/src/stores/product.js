import { create } from "zustand";

const useProductStore = create((set) =>({
    idProduct:null,
    activeTab:1,
    setIdProduct:(val)=>set({idProduct:val}),
    changeTab:(val)=>set({activeTab:val})
}))

export default useProductStore;
