import { KPOP_GROUPS } from "@/lib/constants";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function GroupShowcase() {
  const t = useTranslations("homePage");
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t("discover_community")}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("join_favorite_groups")}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {KPOP_GROUPS.map((group) => (
          <Link
            href={`/events?group=${group.id}`}
            key={group.id}
            className={cn(
              "relative group overflow-hidden rounded-lg aspect-square",
              "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            )}
          >
            <Image
              src={group.image}
              alt={group.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <h3 className="text-white text-xl font-bold">{group.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
