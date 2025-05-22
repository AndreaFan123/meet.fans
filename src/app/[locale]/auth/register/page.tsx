import RegisterForm from "@/components/auth/register-form";
import { Fade } from "@/components/ui/motion";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Fade duration={500}>
        <RegisterForm />
      </Fade>
    </div>
  );
}
