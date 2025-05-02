import { HeroSection } from "@/components/home/hero-section";
import { GroupShowcase } from "@/components/home/group-showcase";
import { FeaturedEvents } from "@/components/home/featured-events";
import { Testimonials } from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import { Fade } from "@/components/ui/motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const t = useTranslations("homePage");
  return (
    <div>
      <HeroSection />
      <Fade delay={100} duration={600}>
        <GroupShowcase />
      </Fade>
      <Fade delay={200} duration={600}>
        <FeaturedEvents />
      </Fade>
      <Fade delay={300} duration={600}>
        <Testimonials />
      </Fade>
      <Fade delay={400} duration={600}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold mb-4">{t("readyToJoin")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t("createProfile")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg">{t("joinNow")}</Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline">
                  {t("browseEvents")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
