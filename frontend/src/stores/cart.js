import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    set => ({
      cart: [],
      addCart: val =>
        set(state => {
          const existingItemIndex = state.cart.findIndex(
            item => item.id === val.id
          )
          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart]
            updatedCart[existingItemIndex] = {
              ...updatedCart[existingItemIndex],
              qty: updatedCart[existingItemIndex].qty + 1,
            }
            return { cart: updatedCart }
          } else {
            return { cart: [...state.cart, val] }
          }
        }),
      increaseCart: val =>
        set(state => {
          return {
            cart: state.cart.map(item =>
              item.id === val ? { ...item, qty: item.qty + 1 } : item
            ),
          }
        }),
      decreaseCart: val =>
        set(state => {
          return {
            cart: state.cart.map(item =>
              item.id === val
                ? item.qty > 1
                  ? { ...item, qty: item.qty - 1 }
                  : { ...item, qty: 1 }
                : item
            ),
          }
        }),
    }),
    {
      name: 'cart',
      getStorage: () => localStorage,
    }
  )
)

export default useCartStore
