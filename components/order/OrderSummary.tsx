'use client'
import { useStore } from "@/src/store"

export default function OrderSummary() {

  const order = useStore(state => state.order)

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>
      {
        order.length === 0 ? (
          <p className="text-center my-10">No hay productos en el pedido</p>
        ) : (
          order.map((product) => (
            <div key={product.id} className="flex justify-between mt-5">
              <p>{product.name}</p>
              <p>{product.quantity}</p>
            </div>
          ))
        )
      }
    </aside>
  )
}
