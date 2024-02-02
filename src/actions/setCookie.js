"use server";
import { cookies } from "next/headers";

export async function setCookies(data) {
  cookies().set("token", data, { maxAge: 10000 });
}

export async function getCookies() {
  return cookies().get("token");
}

export async function clearCookies() {
  cookies().delete("token");
}
