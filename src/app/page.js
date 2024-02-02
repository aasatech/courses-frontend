"use client";
import { getCookies } from "../actions/setCookie";
import { useSession } from "../store/useSession";
import { useEffect } from "react";
import MainForm from "../Components/home/MainForm";
export default function Home() {
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


  return (
    <div>
      <MainForm />
    </div>
  );
}
