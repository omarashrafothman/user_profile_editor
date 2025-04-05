// app/schemas/profileSchema.ts
import { z } from 'zod'

export const profileSchema = z.object({
    username: z.string().min(3, 'Username is too short'),
    email: z.string().email('Invalid email'),
    bio: z.string().optional(),

})
