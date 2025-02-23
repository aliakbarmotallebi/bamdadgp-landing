'use client';
import useExample from "@/stores/example";

export default function Store() {
  const count = useExample((state)=>state.count)
  const inc = useExample((state)=>state.increment)
  return (
    <div className="text-red-500 text-center py-8 font-bold">
      <h1>Store Example Page</h1>
      <h1 onClick={inc} className="p-4 bg-blue-100" >{count}</h1>
    </div>
  );
}
