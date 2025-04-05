// app/actions/profile.ts
'use server'

import { profileSchema } from '../schemas/profileSchema'
import { z } from 'zod'

type ProfileFormInput = z.infer<typeof profileSchema>

type FormState = {
    errors?: Partial<Record<keyof ProfileFormInput, string[]>>
    success?: boolean
    message?: string
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

    try {
        const res = await fetch('http://localhost:5000/profiles/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (!res.ok) {
            return {
                success: false,
                message: `Failed to update profile: ${res.statusText}`,
            }
        }

        return { success: true, message: 'Profile updated successfully' }
    } catch (error) {
        return {
            success: false,
            message: 'An error occurred while connecting to the server',
        }
    }
}
