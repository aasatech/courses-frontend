"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyInput from "../Input/MyInput";
import { Button } from "../Button";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { userRegister, userLogin } from "../../actions/userService";
import { useSession } from "../../store/useSession";
import { setCookies } from "../../actions/setCookie";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("please input name"),
  username: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("please input name"),
  gender: yup.string().required("please select gender"),
  password: yup.string().min(5).required("please input your password"),
  email: yup.string().email("Invalid email").required("please input email"),
  phone: yup.string().min(9).required("please input phone number"),
  confirmPassword: yup
    .string()
    .required("please input your Confirm password")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setSession } = useSession();
  const router = useRouter();
  const handleRegister = async (values, actions) => {
    const newUser = {
      name: values.name,
      username: values.usename,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmPassword,
    };
    setIsLoading(true);
    try {
      const responseRegister = await userRegister(newUser);
      if (responseRegister) {
        const user = {
          email: values.email,
          password: values.password,
        };
        const responseLogin = await userLogin(user);
        if (responseLogin.token) {
          setCookies(responseLogin.token);
          setSession({ token: responseLogin.token });
          actions.resetForm();
          router.push("/home");
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(true);

      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center relative">
      <Formik
        initialValues={{
          name: "",
          username: "",
          gender: "",
          password: "",
          email: "",
          phone: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleRegister(values, actions);
        }}
      >
        <Form className="p-5 w-96">
          <div>
            <div className="text-xl text-center font-bold p-5">Register</div>
            <div className="grid grid-cols-1 gap-4">
              <Field
                component={MyInput}
                label="Name"
                type="name"
                name="name"
                placeholder="name"
                showError={true}
              />
              <Field
                component={MyInput}
                label="UserName"
                type="username"
                name="username"
                placeholder="username"
                showError={true}
              />
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Gender
                </label>
                <div>
                  <Field
                    as="select"
                    name="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    render={(msg) => <div className="text-red-500">{msg}</div>}
                  />
                </div>
              </div>

              <Field
                component={MyInput}
                label="Email"
                type="email"
                name="email"
                placeholder="email"
                showError={true}
              />
              <Field
                component={MyInput}
                label="Phone"
                type="phone"
                name="phone"
                placeholder="phone"
                showError={true}
              />

              <Field
                component={MyInput}
                type="password"
                name="password"
                label="Password"
                secretEntry={true}
                placeholder="password"
                showError={true}
              />
              <Field
                component={MyInput}
                type="password"
                secretEntry={true}
                label="ConfirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                showError={true}
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <Button
              isloading={isLoading}
              label="Register"
              type="submit"
              className="w-full"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
