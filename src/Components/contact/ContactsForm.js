"use client";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { Button } from "../Button";
import MyInput from "../Input/MyInput";
import { sendContact } from "../../actions/Contact";
import CartContact from "./Cart";

function ContactsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const SignupSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(2, "Your name must 2 letter up"),
    email: yup.string().email("Invalid email").required("please input email"),
    subject: yup
      .string()
      .required("Required")
      .min(5, "Your name must 5 letter up"),
    comment: yup
      .string()
      .required("Required")
      .min(10, "Your name must 10 letter up"),
  });

  const handleRegister = async (values, actions) => {
    const contact = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      comment: values.comment,
    };
    setIsLoading(true);
    try {
      const response = await sendContact(contact);
      if (response.message) {
        alert(response.message);
        actions.resetForm();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div class="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16 m-10">
      <div class="block md:grid grid-cols-2 sm:grid-cols-3 gap-5">
        <div>
          <CartContact
            image="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/contact-1.png"
            name="Office Address"
          />
          <CartContact
            image="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/contact-2.png"
            name="Email Address"
          />
        </div>

        <div className="rounded-xl overflow-hidden  shadow-lg p-10 col-span-2">
          <div className="bg-white-200 w-auto h-full ">
            <h1 className="text-5xl font-bold my-10">
              Feel free to get in touch Contact Me.
            </h1>
            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  comment: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                  console.log("true");
                  //   alert(JSON.stringify(values.name));
                  handleRegister(values, actions);
                }}
              >
                <Form className="p-5 w-auto">
                  <div>
                    <div className="grid grid-cols-2 gap-5 mb-5 ">
                      <Field
                        component={MyInput}
                        label="Your name"
                        type="name"
                        name="name"
                        placeholder="Name"
                        showError={true}
                      />
                      <Field
                        component={MyInput}
                        label="Your email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        showError={true}
                      />
                    </div>
                    <Field
                      className="mb-5"
                      component={MyInput}
                      label="Your comment"
                      type="subject"
                      name="subject"
                      placeholder="Your subject"
                      showError={true}
                    />
                    <Field
                      className="mb-5"
                      component={MyInput}
                      label="Your comment"
                      type="comment"
                      name="comment"
                      placeholder="Message"
                      showError={true}
                    />
                  </div>
                  <div className="mt-5 flex justify-end">
                    <Button
                      isloading={isLoading}
                      label="Register now"
                      type="submit"
                      className="w-full"
                    />
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div className="mb-5 col-span-3  ">
          <div className="my-16">
            <h1 className=" text-5xl font-bold text-center mb-5 ">
              Support & Assistance
            </h1>
            <div>
              <p className="text-center my-10">
                our worldwide annual spend on digital advertising surpassing
                billion, it’s no surprise that
                <br />
                different apches to online marketing are becoming available
              </p>
            </div>
          </div>

          <div className="bg-white-200 w-auto block lg:flex">
            <CartContact
              image="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/contact-1.png"
              name="Office Address"
            />
            <CartContact
              image="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/contact-3.png"
              name="Help & Support"
            />
            <CartContact
              image="https://eduquest.itech-theme.com/wp-content/uploads/2023/08/contact-2.png"
              name="Media & Technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsForm;
