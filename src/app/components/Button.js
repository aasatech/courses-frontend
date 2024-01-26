'use client'
import React from 'react'

function Button({ type = 'button', label = 'Button', bgColor = 'bg-blue-500', color = 'text-white', onClick }) {

    return (
        <button
            onClick={onClick}
            type={type}
            className={`inline-block transition rounded-lg ${bgColor} px-5 py-3 text-sm font-medium ${color}`}
        >
            {label}
        </button>
    )
}

export default Button