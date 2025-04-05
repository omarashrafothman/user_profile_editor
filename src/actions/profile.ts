// app/actions/profile.ts
'use server'

import { profileSchema } from '../schemas/profileSchema'
import { z } from 'zod'


type ProfileFormInput = z.infer<typeof profileSchema>

type FormState = {
    errors?: Partial<Record<keyof ProfileFormInput, string[]>>
    success?: boolean
}

export async function handleProfileSubmit(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    const data: ProfileFormInput = {
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        bio: formData.get('bio') as string,
    }

    const result = profileSchema.safeParse(data)

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        }
    }

    // Submit data to DB or API...
    console.log(data)

    return { success: true }
}
