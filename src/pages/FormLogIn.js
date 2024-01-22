"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import MyInput from "@/Components/MyInput";
import { Button } from "@/Components/Button";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import usePasswordToggle from "@/Components/usePasswordToggle";
import { UseSession } from "@/store/UseSession";

const SignupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("please input email"),
  password: yup.string().required("Required").min(5),
});

const FormLogIn = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [isLogin, setIsLogin] = useState(false);
  const { setSession } = UseSession();
  const router = useRouter();
  const handleLogin = (values) => {
    if (
      values.email === "hvireakboth64@gmail.com" &&
      values.password === "123456789"
    ) {
      setSession({ email: values.email });
      router.push("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center relative">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // alert(JSON.stringify(values.name));
          handleLogin(values);
        }}
      >
        <Form className="p-5 w-96">
          <div className="">
            <div className="text-xl text-center font-bold p-5">Log In</div>
            <div>
              <Field
                component={MyInput}
                label="Email"
                type="email"
                name="email"
                placeholder="email"
                showError={true}
              />
            </div>
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
          <div className="mt-5 w-full">
            <Button label="Log In" type="submit" className="w-full" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormLogIn;
