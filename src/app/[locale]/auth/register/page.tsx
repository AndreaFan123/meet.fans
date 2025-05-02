"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Music } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
import { TopicSelection } from "@/components/auth/topic-selection";
import { z } from "zod";
import { Fade } from "@/components/ui/motion";

const registerFormSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).max(10),
});

export default function RegisterPage() {
  // const [isLoading, setIsLoading] = useState(false);
  const [step] = useState<"registration" | "topics">("registration");
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const t = useTranslations("registerPage");

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Mock registration - in a real app, we'd call an API
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setStep("topics");
  //   }, 1500);
  // };

  const handleTopicsComplete = (selectedTopics: string[]) => {
    // In a real app, we'd save the selected topics and redirect
    console.log("Selected topics:", selectedTopics);
    // Redirect would happen here
  };

  return (
    <div className="min-h-screen my-12 flex items-center justify-center p-4">
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Submit</Button>
                </form>
              </Form>
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
