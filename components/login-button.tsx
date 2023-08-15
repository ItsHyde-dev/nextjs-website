"use client"

import { Button } from "./ui/button"

export default function LoginButton() {
  return (
    <Button onClick={() => {
      console.log("Login")
    }}>Login</Button>
  )
}
