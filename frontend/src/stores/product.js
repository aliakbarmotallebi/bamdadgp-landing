import { create } from "zustand";

const useProductStore = create((set) =>({
    activeTab:1,
    changeTab:(val)=>set({activeTab:val})
}))

export default useProductStore;
