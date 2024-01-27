"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import MyInput from "@/Components/MyInput";
import { Button } from "@/Components/Button";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import usePasswordToggle from "@/Components/usePasswordToggle";
import { useSession } from "@/store/UseSession";
import { setCookies } from "../../actions/SetCookie";
import { userLogin } from "@/actions/userService";

const SignupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("please input email"),
  password: yup.string().required("Required").min(5),
});

const FormLogIn = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { setSession } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = async (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    setIsLoading(false);
    try {
      const response = await userLogin(user);
      if (response.token) {
        console.log(response.token);
        setCookies(response.token);
        setSession({ token: response.token });
        router.push("/home");
        // actions.formReset();
        setIsLoading(true);
      }
    } catch (error) {
      setIsLoading(true);
      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center relative">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleLogin(values, actions);
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
            <Button
              isloading={isLoading}
              label="Log In"
              type="submit"
              className="w-full"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormLogIn;
