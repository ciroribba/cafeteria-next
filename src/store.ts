import { create } from 'zustand';
import { OrderItem } from './types';
import { Product } from '@prisma/client';

interface Store {
    order: OrderItem[]
    addToOrder: (product: Product) => void
}

export const useStore = create<Store>((set) => ({
  order: [],
  addToOrder: (product) => {
    //me quedo solo con data por que la imagen y categoria no necesito
    const {categoryId, image, ...data} = product

    console.log(data)

    set((state) => ({
        order: [ ...state.order, {
            ...data, 
            quantity: 1,
            subtotal: 1 * product.price
        }]        
    }))
}
}));