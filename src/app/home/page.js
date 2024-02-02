"use client";
import React, { useEffect } from "react";
import { useSession } from "../../store/useSession";
import { getCookies } from "../../actions/setCookie";
import MainForm from "../../Components/home/MainForm";

const page = () => {
  const { session, setSession } = useSession();

  async function handleCheck() {
    const token = await getCookies();

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
