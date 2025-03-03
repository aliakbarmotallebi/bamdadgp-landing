import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useAuthStore = create(
  persist(
    set => ({
      auth: { id: '', username: '' },
      isAuth: false,
      setUser: val => set({ auth: val }),
      setIsAuth: val => set({ isAuth: val }),
    }),
    {
      name: 'auth',
      getStorage: () => localStorage,
    }
  )
)

export default useAuthStore
