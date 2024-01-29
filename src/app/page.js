"use client";
import { getCookies } from "../actions/SetCookie";
import { useSession } from "../store/UseSession";
import { useEffect } from "react";
import MainForm from "../Components/home/MainForm";
export default function Home() {
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

  console.log(session);

  return <div><MainForm/></div>;
}
