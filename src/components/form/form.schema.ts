import z from "zod";

export const feedBackFormSchema = z.object({
  name: z.string().min(2).max(50),
  subject: z.string().min(5).max(100),
  mail: z.string().email(),
  desc: z.string().min(10).max(250),
});

export type User = z.infer<typeof feedBackFormSchema>;