"use client"

import { Button } from "./ui/button"

export default function SignupButton() {
  return (
    <Button variant="secondary"
      onClick={
        () => {
          console.log("Signup")
        }
      }
    >Signup</Button>
  )
}
