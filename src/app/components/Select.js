'use client'
import { ErrorMessage } from 'formik'
import React from 'react'

function Select({showError=true, options, field, ...props}) {
    return (
        <div>
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-900"> {props.label} </label>

            <select
                {...field} {...props}
                className="mt-1.5 w-full rounded-lg bg-white border-gray-300 text-gray-700 sm:text-sm p-4 shadow-lg"
            >
                <option
                    className='p-4' 
                    value="">Please select {props.label.toLowerCase()}</option>
                {
                    options.map(option=>(
                        <option
                            key={option.value} 
                            value={option.value}
                        >
                                {option.label}
                        </option>
                    ))
                }
            </select>
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

export default Select