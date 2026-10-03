import { create } from 'zustand'
const useGeneralStore = create(set => ({
  openMenu: false,
  setOpenMenu: val => set({ openMenu: val }),
}))

export default useGeneralStore
