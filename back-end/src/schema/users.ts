import { z } from "zod";

export const SignUpSchema = z.object({
    
    name: z.string().nullish(),
    email: z.string().email(),
    password:z.string().min(6)
})