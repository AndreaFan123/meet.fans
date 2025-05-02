import { useTranslations } from "next-intl";
import { TESTIMONIALS } from "@/mock/data";

export function Testimonials() {
  const t = useTranslations("homePage");
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("testimonialTitle")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("testimonialDescription")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-card-foreground flex-grow italic">
              {testimonial.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
