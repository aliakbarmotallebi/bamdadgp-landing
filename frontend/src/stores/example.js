import { create } from "zustand";

const useExample = create((set)=>({
    count:0,
    increment: ()=>set((state)=>({count:state.count + 1})),
    decrement: ()=>set((state)=>({count:state.count - 1})),
}))

export default useExample;