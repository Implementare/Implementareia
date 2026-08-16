/*
 * Design: Executive Dark Command Center
 * Glass navigation bar with Lexend font, dark theme, blue accent (#135bec)
 * Sticky top, backdrop-blur, border-bottom subtle
 * Logo: JK Shield instead of blue square
 */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ESCUDO_JK = "/images/escudo-jk.png";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("Sobre Jim", "About Jim") },
    { href: "/speaking", label: t("Temas y Enfoques", "Topics & Focus") },
    { href: "/workshops", label: t("Talleres y Conferencias", "Workshops & Conferences") },
  ];

  return (
    <header className="glass-nav sticky top-0 z-50 w-full border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo with Shield */}
        <Link href="/" className="flex items-center gap-3 text-foreground hover:opacity-90 transition-opacity">
          <img src={ESCUDO_JK} alt="JK Shield" className="h-9 w-auto" />
          <h2 className="text-foreground text-lg font-bold tracking-tight">Jim Klaus</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                location === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Language toggle + Contact */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="text-xs font-bold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors uppercase tracking-wider"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-bold rounded-lg px-5 py-2.5 flex items-center gap-2"
          >
            <span>{t("Contacto", "Contact")}</span>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="text-xs font-bold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors uppercase tracking-wider"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-bold rounded-lg px-5 py-2.5 flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                {t("Contacto", "Contact")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
