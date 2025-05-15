import { MEMBERSHIP_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fade } from "@/components/ui/motion";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
      <Fade duration={500}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your Membership Plan
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our community with a plan that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground text-xs rounded-full px-3 py-1 font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>
                  {plan.price === 0
                    ? "Free forever"
                    : `$${plan.price.toFixed(2)} per month`}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href="/auth/register" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">
                Can I change my plan later?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be applied at the start of your next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                How do I cancel my subscription?
              </h3>
              <p className="text-muted-foreground">
                You can cancel your subscription anytime from your account
                settings. You'll continue to have access until the end of your
                current billing period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Are there any refunds?</h3>
              <p className="text-muted-foreground">
                We don't offer refunds for monthly subscriptions, but you can
                cancel anytime to avoid future charges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                What happens to my profile if I downgrade?
              </h3>
              <p className="text-muted-foreground">
                Your profile will remain intact, but you'll lose access to
                premium features associated with your previous plan.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
