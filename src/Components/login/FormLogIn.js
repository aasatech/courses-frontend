"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import MyInput from "../Input/MyInput";
import { Button } from "../Button";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import usePasswordToggle from "../usePasswordToggle";
import { useSession } from "../../store/UseSession";
import { setCookies } from "../../actions/SetCookie";
import { userGoogle, userLogin } from "../../actions/userService";
import Link from "next/link";

const SignupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("please input email"),
  password: yup.string().required("Required").min(5),
});

const FormLogIn = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const { setSession } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (values, actions) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    setIsLoading(true);
    try {
      const response = await userLogin(user);
      if (response.token) {
        console.log(response.token);
        setCookies(response.token);
        setSession({ token: response.token });
        actions.resetForm();
        router.push("/home");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      alert(error.response?.data?.message);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const response = await userGoogle();
      if (response.token) {
        console.log(response.token);
        setCookies(response.token);
        setSession({ token: response.token });
        router.push("/home");
        actions.resetForm();
        setIsLoading(true);
      }
    } catch (error) {
      // console.log(error);
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
          <div class="flex flex-col max-w-sm gap-5 my-5">
            <Link href="https://course-web-service.onrender.com/api/v1/auth/facebook">
              <button
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
                Sign in with Facebook
              </button>
            </Link>
            <Link href="https://course-web-service.onrender.com/api/v1/auth/google">
              <button
                onClick={handleLoginGoogle}
                type="button"
                class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormLogIn;
