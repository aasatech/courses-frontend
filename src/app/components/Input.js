'use client'
import { ErrorMessage } from 'formik'
import React from 'react'

function Input({ showError = true, field, ...props }) {
    // console.log(props);
    return (
        <div>
            <label htmlFor={field.name}>{props.label}</label>

            <div className="relative">
                <input
                    {...field} {...props}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-lg"
                />
            </div>
            {
                showError &&
                <ErrorMessage
                    name={field.name}
                    render={(msg) => <div className="text-red-500">{msg}</div>}
                />
            }
        </div>
    )
}

export default Input