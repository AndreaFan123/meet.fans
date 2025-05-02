/* eslint-disable react/no-unescaped-entities */
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
    <div className="max-w-7xl mt-32 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Fade duration={500}>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">選擇適合你的訂閱服務</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            meetFans
            提供多種訂閱計劃，以滿足不同需求的粉絲。無論你是新手還是資深粉絲，我們都有適合你的計劃。
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
                    : plan.id === "yearly" || plan.id === "annual"
                    ? `$${plan.price.toFixed(2)} / 年`
                    : `$${plan.price.toFixed(2)} / 月`}
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
          <h2 className="text-2xl font-bold mb-4">常見問題</h2>

          <div className="mt-8 space-y-6 text-left">
            <div>
              <h3 className="font-semibold mb-2">
                我可以隨時升級或降級我的計劃嗎？
              </h3>
              <p className="text-muted-foreground">
                當然！你可以隨時升級或降級你的計劃。只需前往帳戶設定，選擇你想要的計劃並完成付款即可。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">我如何取消我的訂閱？</h3>
              <p className="text-muted-foreground">
                meetFans
                的取消訂閱非常簡單，你只要前往帳戶設定頁面，然後點擊取消訂閱按鈕即可。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">有退款機制嗎？</h3>
              <p className="text-muted-foreground">
                我們不提供退款，但你可以在下個計劃週期之前隨時取消訂閱。
                您的訂閱將會在當前訂閱週期結束時終止。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                如果我取消訂閱，我的資料會不會被刪除？
              </h3>
              <p className="text-muted-foreground">
                取消訂閱後，直到當前訂閱週期結束，你仍會享有所有的會員權益。之後的會員權益，請參考免費會員的項目。
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-muted-foreground mb-4">
              如果你有其他問題或需要進一步的幫助，請隨時聯繫我們的客服支援團隊。
            </p>
            <Button variant="outline">聯絡我們</Button>
          </div>
        </div>
      </Fade>
    </div>
  );
}
