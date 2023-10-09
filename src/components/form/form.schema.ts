import z from "zod";

export const feedBackFormSchema = z.object({
  name: z.string(),
  subject: z.string(),
  mail: z.string(),
  desc: z.string(),
});

export type User = z.infer<typeof feedBackFormSchema>;