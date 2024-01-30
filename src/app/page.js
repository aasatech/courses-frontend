"use client";

import MainForm from "@/Components/home/MainForm";
import { getCookies } from "@/actions/SetCookie";
import { useSession } from "@/store/UseSession";
import { useEffect } from "react";

export default function Home() {
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

  console.log(session);

  return (
    <div>
      <MainForm />
    </div>
  );
}
