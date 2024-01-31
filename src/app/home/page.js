"use client";
import React, { useEffect } from "react";
import { useSession } from "../../store/UseSession";
import { getCookies } from "../../actions/SetCookie";
import MainForm from "../../Components/home/MainForm";

const page = () => {
  const { session, setSession } = useSession();

  async function handleCheck() {
    const token = await getCookies();
    console.log("token", token?.value);
    setSession({
      token: token?.value,
    });
  }
  useEffect(() => {
    handleCheck();
  }, []);
  return <MainForm />;
};
export default page;
