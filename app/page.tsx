"use client"

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      redirect("/auth");
    }

    redirect("/home");
  }, []);
}
