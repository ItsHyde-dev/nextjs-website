'use client'

import Link from "next/link"
import { Button } from "./ui/button"


export default function LoginButton() {
  return (

    <Button onClick={() => {
      console.log("Login")
      localStorage.setItem("isLoggedIn", "true")
    }}
    asChild
    >
    <Link href="/home">Login</Link>
    </Button>
  )
}
