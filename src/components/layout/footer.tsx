import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_NAME } from "@/lib/constants";
import { Music2, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-7xl mt-32 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Music2 className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-bold text-primary">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">{t("description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">
              {t("navigation.navigation")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("navigation.events")}
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("navigation.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">
              {t("account.account")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/auth/login"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("account.login")}
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("account.register")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">
              {t("legal.legal")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("legal.privacy_policy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("legal.terms_of_service")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t("legal.cookie_policy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} {SITE_NAME}. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
