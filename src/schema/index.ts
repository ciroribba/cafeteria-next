import { z } from 'zod';

export const OrderSchema = z.object({
    name: z.string().min(1, 'Tu Nombre es Obligatorio'),
    total: z.number().min(1, 'Hay un error en el total'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number(),
    })),
});

export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform((value) => parseInt(value))
                .refine((value) => value > 0, {message: 'El ID de la Orden es Obligatorio'})
})