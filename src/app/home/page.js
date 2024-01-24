"use client";
import MainForm from "@/Components/home/MainForm";
import { getCookies } from "@/actions/SetCookie";
import { useSession } from "@/store/UseSession";
import React, { useEffect } from "react";

const page = () => {
  const { session, setSession } = useSession();

  useEffect(() => {
    async function handleCheck() {
      const token = await getCookies();
      console.log("token", token?.value);
      setSession({
        token: token?.value,
      });
    }
    handleCheck();
  }, []);

  // console.log(session);
  return <MainForm />;
};
export default page;
