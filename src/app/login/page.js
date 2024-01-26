'use client'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Button from '../components/Button';
import Input from '../components/Input';
// import { cookies } from 'next/headers';


const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("please input email"),
    password: Yup.string().required("Required").min(5),
  });

const Login = () => {
  async function handleLogin(user){
    console.log(user);
    try{
      const res = await fetch('https://course-web-service.onrender.com/api/v1/auth/login',{
        method: 'POST',
        headers: {
          'content-type':'application/json',
        },
        body: JSON.stringify({
          "email": "student999@gmail.com",
          "password": "123123123",
        })
      })
      const result=await res.json()
      // cookies.set('token', result.token)
    
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="mx-auto max-w-96 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center mb-5">
        <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
      </div>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        // validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="grid gap-5 mb-5">
            <Field
              component={Input}
              label='Email'
              name='email'
              placeholder='Enter email'
              type='email'
            />
            <Field
              component={Input}
              label='Password'
              name='password'
              placeholder='Enter password'
              type='text'
            />
          </div>
          <div className="grid">
            <Button type='submit' label='Login' color='text-white' bgColor='bg-blue-500 hover:bg-blue-500/80' />
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Login