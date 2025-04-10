import React from 'react'
import { InputProps } from "../../types/types"
function Input({ name, type, label, id, placeholder, value, change, blur, error }: InputProps) {
  return (
    <div className="sm:col-span-4">
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={change}
            onBlur={blur}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
        {error && (
          <p className="text-red-600 text-sm mt-1">{error}</p>
        )}

      </div>
    </div>
  )
}

export default Input