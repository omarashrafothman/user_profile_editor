'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Input from '../input/Input'
import { FormState, Errors } from '@/types/types'
import { toast } from 'react-toastify'
import { profileSchema } from '@/schemas/profileSchema'
import { z } from 'zod'

function ProfileForm() {
    const [formState, setFormState] = useState<FormState>({
        username: '',
        email: '',
        bio: '',

    })

    const [errors, setErrors] = useState<Errors>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // Example: simple validation logic
        if (value.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'This field is required',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()


        try {
            profileSchema.parse(formState)

            const response = await fetch('/api/profile/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            const result = await response.json()

            if (!result.success) {
                setErrors(result.errors || {})
                toast.error('Can not update this profile')
            } else {
                toast.success('Profile updated successfully!')
            }
        } catch (error) {
            if (error instanceof z.ZodError) {

                const formattedErrors: Errors = {}
                error.errors.forEach((err) => {
                    formattedErrors[err.path[0]] = err.message
                })
                setErrors(formattedErrors)
                toast.error('Please fix the errors before submitting.')
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="border-b border-gray-900/10 pb-4">
                    <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">You can update your data now.</p>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <Input
                            label="Username"
                            value={formState.username}
                            placeholder="john deo"
                            id="username"
                            name="username"
                            type="text"
                            change={handleChange}
                            blur={handleBlur}
                            error={errors?.username || ''}
                        />


                        <Input
                            label="Email"
                            value={formState.email}
                            placeholder="example@gmail.com"
                            id="email"
                            name="email"
                            type="email"
                            change={handleChange}
                            error={errors?.email || ''}
                            blur={handleBlur}
                        />


                        <div className="col-span-full">
                            <label htmlFor="bio" className="block text-sm/6 font-medium text-gray-900">
                                Bio
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    value={formState.bio}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors?.bio && (
                                <p className="text-red-600 text-sm mt-1">{errors.bio}</p>
                            )}
                            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                Profile Picture
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <Image src="/imageIcon.png" width={100} height={100} alt="profile" className="ml-10" />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} onBlur={handleBlur} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="submit"
                    className="cursor-pointer rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default ProfileForm
