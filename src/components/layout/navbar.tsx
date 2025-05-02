"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Music2, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isAuthenticated = false;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Music2 className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-primary">
                {SITE_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center">
              <ThemeToggle
                light={t("light")}
                dark={t("dark")}
                system={t("system")}
              />
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button variant="ghost" className="ml-4">
                    {t("dashboard")}
                  </Button>
                </Link>
              ) : (
                <div className="flex space-x-2 ml-4">
                  <Link href="/auth/login">
                    <Button variant="ghost">{t("login")}</Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button>{t("register")}</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle
              light={t("light")}
              dark={t("dark")}
              system={t("system")}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="ml-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t(link.label)}
            </Link>
          ))}
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t("dashboard")}
            </Link>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("login")}
              </Link>
              <Link
                href="/auth/register"
                className="block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("register")}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
