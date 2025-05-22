import { Fade } from "@/components/ui/motion";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Fade duration={500} className="w-full max-w-full sm:max-w-md">
        <LoginForm />
      </Fade>
    </div>
  );
}
