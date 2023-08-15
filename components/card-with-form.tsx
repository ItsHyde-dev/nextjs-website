import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import LoginButton from "./login-button"
import SignupButton from "./signup-button"

export function CardWithForm() {
  return (
    <Tabs defaultValue="login" className="w-2/5">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card className="flex flex-col justify-center items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Log in to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 w-3/4">
            <div className="space-y-1">
              <Label htmlFor="username" className="pl-3">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="pl-3">Password</Label>
              <Input id="password" type="password" placeholder="Password" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <LoginButton />
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card className="flex flex-col justify-center items-center">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>Signup</CardTitle>
            <CardDescription>
              Sign up for an account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-row space-x-2">
              <div className="space-y-1">
                <Label htmlFor="firstname" className="pl-3">First name</Label>
                <Input id="firstname" placeholder="First name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastname" className="pl-3">Last name</Label>
                <Input id="lastname" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username" className="pl-3">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password" className="pl-3">Enter your password</Label>
              <Input id="password" placeholder="Password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <SignupButton />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

