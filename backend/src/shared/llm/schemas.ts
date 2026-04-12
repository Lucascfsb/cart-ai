import z from 'zod';

const sendMessageActionSchema = z.object({
  type: z.literal('send_message'),
});

const suggestCartsActionSchema = z.object({
  type: z.literal('suggest_carts'),
  payload: z.object({
    input: z.string().trim().min(1),
  }),
});

export const answerMessageSchema = z.object({
  message: z.string(),
  action: z.discriminatedUnion('type', [
    sendMessageActionSchema,
    suggestCartsActionSchema,
  ]),
});

export const suggestCartsSchema = z.object({
  carts: z.array(
    z.object({
      store_id: z.number(),
      score: z.number(),
      products: z.array(
        z.object({
          id: z.number(),
          quantity: z.number(),
          name: z.string(),
        }),
      ),
    }),
  ),
  response: z.string(),
});
