import { create } from 'zustand'
const useUserStore = create(set => ({
  user: {},
  setUser: val => set(state => ({ user: { ...state.user, ...val } })),
}))

export default useUserStore
