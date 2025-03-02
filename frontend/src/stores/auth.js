import { create } from 'zustand'
import { persist } from 'zustand/middleware'
const useAuthStore = create(
  persist(
    set => ({
      auth: { id: '', username: '' },
      setUser: val => set({ auth: val }),
    }),
    {
      name: 'auth',
      getStorage: () => localStorage,
    }
  )
)

export default useAuthStore
