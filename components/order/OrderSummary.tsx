'use client'
import { useStore } from "@/src/store"
import ProductDetails from "./ProductDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"
import { createOrder } from "@/actions/create-order-actions"
import { OrderSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function OrderSummary() {

  const order = useStore(state => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

  const handleCreateOrder = (formData : FormData) => {
    const data = {
      name: formData.get('name')
    }
    const result = OrderSchema.safeParse(data)
    if(!result.success) {
      //console.log(result.error.errors)
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
    }
    return
    createOrder()
  }
  
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>
      {
        order.length === 0 ? (
          <p className="text-center my-10">No hay productos en el pedido</p>
        ) : (
          <div className="mt-5">
            {
              order.map((item) => (
                <ProductDetails 
                  key={item.id}
                  item={item}
                />
              ))
            }
            <p className="text-2xl mt-20 text-center">
              Total a pagar: {' '}
              <span className="font-bold">
                {formatCurrency(total)}
              </span>
            </p>
            <form 
             className="w-full mt-10 space-y-5"
             action={handleCreateOrder}
            >
              <input 
               type="text"
               placeholder="Tu nombre"
               className="bg-white border border-gray-100 p-2 w-full"
               name="name"
              />
              <input
                type="submit"
                className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
                value={`confirmar pedido`}
              />
            </form>
          </div>
        )
      }
    </aside>
  )
}
