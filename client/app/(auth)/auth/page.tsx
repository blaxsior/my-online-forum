import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SigninForm from "./components/signin-form";
import SignupForm from "./components/signup-form";
import { Separator } from "@/components/ui/separator";

const AuthPage = () => {
  return (
    <>
      <Tabs defaultValue="signin" className="w-[400px]">
        <div className="text-center">
        <TabsContent value="signin">
          로그인
        </TabsContent>
        <TabsContent value="signup">
          회원 가입
        </TabsContent>
        </div>
        <Separator className="mt-10 mb-8" />
        <TabsList>
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SigninForm />
        </TabsContent>

        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </>
  )
};
export default AuthPage;
