"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { TopicSelection } from "@/components/auth/topic-selection";
import { Fade } from "@/components/ui/motion";

import { Link } from "@/i18n/navigation";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"registration" | "topics">("registration");
  const t = useTranslations("register");

  const registerFormSchema = z.object({
    username: z.string().min(2).max(10),
    email: z.string().email({
      message: t("email_error"),
    }),
    password: z
      .string()
      .min(8)
      .max(20, {
        message: t("password_must_match"),
      }),
  });

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const handleTopicsComplete = (selectedTopics: string[]) => {
    // In a real app, we'd save the selected topics and redirect
    console.log("Selected topics:", selectedTopics);
    // Redirect would happen here
  };

  return (
    <>
      {step === "registration" ? (
        <Card className="w-full max-w-md mt-20 pt-7">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl">{t("create_account")}</CardTitle>
            <CardDescription>{t("join_community")} 🚀</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("username")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("username_placeholder")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("email")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("email_placeholder")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("password")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("password_placeholder")}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-[.8rem]">
                          ❗️{t("password_must_match")}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Alert>
                  <AlertDescription>{t("account_consent")}</AlertDescription>
                </Alert>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? t("creating_account") : t("create_account")}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              {t("already_have_account")}
              <Link href="/auth/login" className="text-primary hover:underline">
                {t("signin")}
              </Link>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <TopicSelection onComplete={handleTopicsComplete} />
      )}
    </>
  );
}
