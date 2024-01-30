"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyInput from "../Input/MyInput";
import { Button } from "../Button";
import * as yup from "yup";
import usePasswordToggle from "../usePasswordToggle";
import { useRouter } from "next/navigation";
import { userRegister, userLogin } from "../../actions/userService";
import { useSession } from "../../store/UseSession";
import { setCookies } from "../../actions/SetCookie";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too Short!")
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
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [ConfirmPasswordInputType, ConfirmToggleIcon] = usePasswordToggle();
  const [isLoading, setIsLoading] = useState(false);
  const { setSession } = useSession();
  const router = useRouter();
  const handleRegister = async (values, actions) => {
    const newUser = {
      name: values.name,
      username: values.name,
      email: values.email,
      password: values.password,
      password_confirmation: values.confirmPassword,
    };
    setIsLoading(true);
    try {
      const responseRegister = await userRegister(newUser);
      if (responseRegister) {
        console.log(responseRegister);

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
      setIsLoading(false);

      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center relative">
      <Formik
        initialValues={{
          name: "",
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
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <div>
                  <Field
                    as="select"
                    name="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <Field
                    component={MyInput}
                    type={PasswordInputType}
                    name="password"
                    placeholder="password"
                  />
                  <span
                    className="bottom-0 absolute
                right-2 transform -translate-y-1/3 cursor-pointer"
                  >
                    {ToggleIcon}
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  render={(msg) => <div className="text-red-500">{msg}</div>}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    component={MyInput}
                    type={ConfirmPasswordInputType}
                    name="confirmPassword"
                    placeholder="confirmPassword"
                  />
                  <span
                    className="bottom-0 absolute
                right-2 transform -translate-y-1/3 cursor-pointer"
                  >
                    {ConfirmToggleIcon}
                  </span>
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  render={(msg) => <div className="text-red-500">{msg}</div>}
                />
              </div>
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
