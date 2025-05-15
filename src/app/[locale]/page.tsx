import { HeroSection } from "@/components/home/hero-section";
import { GroupShowcase } from "@/components/home/group-showcase";
import { FeaturedEvents } from "@/components/home/featured-events";
import { Testimonials } from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import { Fade } from "@/components/ui/motion";
import Link from "next/link";

export default async function Home() {
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to join the community?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Create your profile, connect with other fans, and start
              discovering K-pop events near you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg">Join Now</Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline">
                  Browse Events
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}
