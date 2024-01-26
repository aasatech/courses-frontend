'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'

const existingEmails = ['kei@gmail.com']

const registerSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("please input name"),
  gender: Yup.string().required("please select gender"),
  email: Yup.string()
    .lowercase()
    .email("Invalid email")
    .notOneOf(existingEmails, 'This email already exists!')
    .required("Required email!"),
  phone: Yup.string().min(9).required("please input phone number"),
  password: Yup.string().min(5, 'Minimum 5 characters!').required("Required!"),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required"),
});


const Register = () => {
  const router = useRouter()

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ]

  async function handleRegister(form) {
    try{
      const res = await fetch('https://course-web-service.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify({
          "name": "stud",
          "username": "stud",
          "email": "stud@gmail.com",
          "password": "123123123",
          "password_confirmation": "123123123"
        })
      })
      console.log(res.json());
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center mb-5">
        <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
      </div>

      <Formik
        initialValues={{
          name: '',
          gender: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        }}
        // validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        <Form >
          <div className="grid grid-cols-3 gap-5 mb-5">
            <Field
              component={Input}
              label='Name'
              name='name'
              placeholder='Enter name'
              type='text'
              showError={true}
            />
            <Field
              component={Select}
              label='Gender'
              options={genderOptions}
              name='gender'
            />
            <Field
              component={Input}
              label='Password'
              name='password'
              placeholder='Enter password'
              type='text'
            />
            <Field
              component={Input}
              label='Email'
              name='email'
              placeholder='Enter email'
              type='email'
            />
            <Field
              component={Input}
              label='Phone'
              name='phone'
              placeholder='Enter phone number'
              type='text'
            />
            <Field
              component={Input}
              label='Confirm password'
              name='confirmPassword'
              placeholder='Enter confirm password'
              type='text'
            />
          </div>
          <div className="flex items-center justify-end">
            <Button type='submit' label='Register' color='text-white' bgColor='bg-blue-500 hover:bg-blue-500/80' />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Register