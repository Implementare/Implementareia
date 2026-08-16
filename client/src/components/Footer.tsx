/*
 * Design: Executive Dark Command Center
 * Dark footer with sitemap, social links
 * No newsletter section. Shield logo instead of blue icon.
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const ESCUDO_JK = "/images/escudo-jk.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-background border-t border-border py-12 px-6" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 text-foreground mb-4">
            <img src={ESCUDO_JK} alt="JK Shield" className="h-10 w-auto" />
            <span className="text-xl font-bold">Jim Klaus</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm mb-4">
            {t(
              "Ayudando a líderes a decodificar el futuro a través de datos, IA e insight estratégico.",
              "Helping leaders decode the future through data, AI, and strategic insight."
            )}
          </p>
          <div className="text-muted-foreground text-sm space-y-1 mb-6">
            <p>
              <span className="material-symbols-outlined text-primary align-middle mr-1" style={{ fontSize: 16 }}>phone</span>
              +51-947346877
            </p>
            <p>
              <span className="material-symbols-outlined text-primary align-middle mr-1" style={{ fontSize: 16 }}>mail</span>
              consultas@implementareai.com
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/jimklaus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://twitter.com/jimklaus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="text-foreground font-bold mb-4">{t("Mapa del Sitio", "Sitemap")}</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">{t("Sobre Jim", "About Jim")}</Link></li>
            <li><Link href="/speaking" className="hover:text-primary transition-colors">{t("Temas y Enfoques", "Topics & Focus")}</Link></li>
            <li><Link href="/workshops" className="hover:text-primary transition-colors">{t("Talleres y Conferencias", "Workshops & Conferences")}</Link></li>
            <li>
              <a
                href="https://implementareai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Implementare AI
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
        <p>&copy; {new Date().getFullYear()} Jim Klaus. {t("Todos los derechos reservados.", "All rights reserved.")}</p>
        <div className="flex gap-6">
          <a className="hover:text-foreground transition-colors" href="#">{t("Política de Privacidad", "Privacy Policy")}</a>
          <a className="hover:text-foreground transition-colors" href="#">{t("Términos de Servicio", "Terms of Service")}</a>
        </div>
      </div>
    </footer>
  );
}
