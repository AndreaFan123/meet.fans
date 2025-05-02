"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Music } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TopicSelection } from "@/components/auth/topic-selection";
import { Fade } from "@/components/ui/motion";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"registration" | "topics">("registration");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const t = useTranslations("registerPage");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock registration - in a real app, we'd call an API
    setTimeout(() => {
      setIsLoading(false);
      setStep("topics");
    }, 1500);
  };

  const handleTopicsComplete = (selectedTopics: string[]) => {
    // In a real app, we'd save the selected topics and redirect
    console.log("Selected topics:", selectedTopics);
    // Redirect would happen here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Fade duration={500}>
        {step === "registration" ? (
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-2">
                <Music className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t("title")}</CardTitle>
              <CardDescription>{t("description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("fullName")}</Label>
                  <Input
                    id="name"
                    placeholder={t("fullName")}
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">{t("password")}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t("createPassword")}
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    {t("passwordHint")}
                  </p>
                </div>

                <Alert>
                  <AlertDescription>{t("concent")}</AlertDescription>
                </Alert>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("creatingAccount") : t("createAccount")}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                {t("haveAnAccount")}{" "}
                <Link
                  href="/auth/login"
                  className="text-primary hover:underline"
                >
                  {t("signIn")}
                </Link>
              </div>
            </CardFooter>
          </Card>
        ) : (
          <TopicSelection onComplete={handleTopicsComplete} />
        )}
      </Fade>
    </div>
  );
}
