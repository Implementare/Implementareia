/*
 * Design: Executive Dark Command Center
 * Workshops & Conferences page
 * Dedicated page for talleres, conferencias y clases dictadas
 * Dark theme, Lexend font, blue accent (#135bec)
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";

// Foto saco marrón con libro (3.1FOTOTOP - biblioteca)
const JIM_SPEAKING_PHOTO = "/images/jim-academic.png";
const CONFERENCE_IMG = "/images/conference-speaking.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Workshops() {
  const { t } = useLanguage();

  const workshops = [
    {
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      tag: t("Diplomado", "Diploma Program"),
      date: "Ago 2026",
      title: t("Certificación en IA para la Comunicación Corporativa \u2014 UPC", "AI Certification for Corporate Communication \u2014 UPC"),
      desc: t(
        "Docente en la nueva Certificación en IA para la Comunicación Corporativa de la Escuela de Postgrado de la Universidad Peruana de Ciencias Aplicadas (UPC). Programa de 3 meses (78 horas) que integra herramientas de IA generativa como ChatGPT, Gemini y Perplexity en estrategias de comunicación empresarial. Clases virtuales en vivo, martes y jueves.",
        "Faculty member in the new AI Certification for Corporate Communication at UPC Graduate School (Universidad Peruana de Ciencias Aplicadas). A 3-month program (78 hours) integrating generative AI tools like ChatGPT, Gemini and Perplexity into corporate communication strategies. Live virtual classes, Tuesdays and Thursdays."
      ),
      link: "https://postgrado.upc.edu.pe/landings/programas-especializados/comunicaciones/certificacion-en-ia-para-la-comunicacion-corporativa/",
      logo: "", // TODO: agregar /images/upc-logo.png cuando Jim envíe el logo oficial de UPC
    },
    {
      img: "/images/evento-dia-mercadologo.jpeg",
      tag: t("Conversatorio", "Panel Discussion"),
      date: "May 2026",
      title: t("Día del Mercadólogo: El Rol del Marketing en la Era Digital", "Marketer's Day: The Role of Marketing in the Digital Era"),
      desc: t(
        "Conversatorio por el Día del Mercadólogo junto a expertos del área y estudiantes de Administración y Marketing de la Universidad Privada del Norte, compartiendo mi visión sobre el rol del mercadólogo actual en la era digital y cómo nuestra disciplina ha evolucionado hacia una combinación de estrategia, creatividad, data y tecnología.",
        "Panel discussion for Marketer's Day alongside industry experts and Marketing students at Universidad Privada del Norte, sharing my vision on the current marketer's role in the digital era and how our discipline has evolved into a combination of strategy, creativity, data and technology."
      ),
      link: "",
    },
    {
      img: "/images/taller-ia-ventas.jpeg",
      tag: t("Taller", "Workshop"),
      date: "May 2026",
      title: t("IA Transformando la Investigación de Mercados y Medios Digitales", "AI Transforming Market Research and Digital Media"),
      desc: t(
        "Taller liderado como DTC donde los estudiantes de Administración y Marketing de la Universidad Privada del Norte exploraron cómo la Inteligencia Artificial está cambiando la manera de analizar datos, entender audiencias y tomar decisiones de marketing. Más que un taller, fue una experiencia para mirar el marketing con otros ojos.",
        "Workshop led as DTC where Marketing students at Universidad Privada del Norte explored how Artificial Intelligence is changing the way we analyze data, understand audiences and make marketing decisions. More than a workshop, it was an experience to see marketing through new eyes."
      ),
      link: "",
    },
    {
      img: "/images/vendedor-ia-evento.jpg",
      tag: t("Taller", "Workshop"),
      date: "May 2026",
      title: t("Vendedor IA: Inteligencia que Conecta, Ventas que Transforman", "AI Seller: Intelligence that Connects, Sales that Transform"),
      desc: t(
        "Taller para estudiantes de Administración y Gestión Comercial en la Semana del Vendedor. Conecta mejor con tus clientes, usa la inteligencia artificial a tu favor, transforma negociaciones en resultados y vende con estrategia, impacta con valor.",
        "Workshop for Business Administration students during Seller's Week. Connect better with your clients, use artificial intelligence in your favor, transform negotiations into results and sell with strategy, impact with value."
      ),
      link: "",
    },
    {
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tag: t("Taller", "Workshop"),
      date: "Mar 2025",
      title: t("Google AI Studio: Taller Avanzado de IA en los Negocios", "Google AI Studio: Advanced AI Workshop for Business"),
      desc: t(
        "Lideré un taller avanzado de IA con 70 futuros profesionales, explorando Google Studio: modelado de segmentos sintéticos, análisis predictivo autónomo y construcción de equipos virtuales de alta fidelidad técnica.",
        "I led an advanced AI workshop with 70 future professionals, exploring Google Studio: synthetic segment modeling, autonomous predictive analysis, and building high-fidelity virtual technical teams."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_google-ai-studio-activity-7430253477764816896-RjyO",
    },
    {
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      tag: t("Taller", "Workshop"),
      date: "May 2025",
      title: t("Taller de IA para Profesionales: Aplicaciones Prácticas", "AI Workshop for Professionals: Practical Applications"),
      desc: t(
        "Siguiendo con la serie de talleres prácticos de IA para profesionales. Explorando aplicaciones reales de inteligencia artificial en el entorno empresarial.",
        "Continuing the series of practical AI workshops for professionals. Exploring real applications of artificial intelligence in the business environment."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_estimados-profesionales-siguiendo-con-la-activity-7320521450044411905-RMG7",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${CONFERENCE_IMG}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    {t("Experiencias de Aprendizaje", "Learning Experiences")}
                  </span>
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  {t("Talleres y", "Workshops &")}
                  <br />
                  <span className="text-primary">{t("Conferencias", "Conferences")}</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
                  {t(
                    "Conferencias, talleres y clases dictadas. Experiencias que combinan teoría académica con aplicación práctica de IA, retail y análisis de datos.",
                    "Conferences, workshops and lectures. Experiences that combine academic theory with practical application of AI, retail and data analytics."
                  )}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                    <div>
                      <p className="text-foreground font-bold text-lg">5000+</p>
                      <p className="text-muted-foreground text-xs">{t("Profesionales capacitados", "Professionals trained")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">school</span>
                    <div>
                      <p className="text-foreground font-bold text-lg">30+</p>
                      <p className="text-muted-foreground text-xs">{t("Talleres dictados", "Workshops delivered")}</p>
                    </div>
                  </div>

                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={JIM_SPEAKING_PHOTO}
                alt="Jim Klaus - Speaker"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </section>

        {/* ===== WORKSHOPS GRID ===== */}
        <section className="w-full px-6 py-16 max-w-7xl mx-auto">
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary text-3xl">school</span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                {t("Eventos Recientes", "Recent Events")}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {t(
                "Cada taller y conferencia está diseñado para ofrecer conocimiento práctico y accionable que los participantes pueden aplicar inmediatamente.",
                "Each workshop and conference is designed to deliver practical, actionable knowledge that participants can apply immediately."
              )}
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {workshops.map((ws) => {
              const content = (
                <>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-card border border-border">
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${ws.img}')` }}
                    />
                    <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider">
                      {ws.tag}
                    </div>
                    {(ws as any).logo && (
                      <div className="absolute top-3 right-3 bg-white rounded-lg p-1.5 shadow-lg">
                        <img src={(ws as any).logo} alt="UPC" className="h-8 w-auto" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>calendar_month</span>
                    <span>{ws.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {ws.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{ws.desc}</p>
                  {ws.link && (
                    <span className="mt-3 text-primary text-sm font-semibold inline-flex items-center gap-1">
                      {ws.link.includes("linkedin.com") ? t("Ver en LinkedIn", "View on LinkedIn") : t("Ver más información", "View more info")}
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                    </span>
                  )}
                </>
              );
              return (
                <motion.article key={ws.title} variants={fadeUp} className="flex flex-col group cursor-pointer">
                  {ws.link ? (
                    <a href={ws.link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1">
                      {content}
                    </a>
                  ) : (
                    <div className="flex flex-col flex-1">{content}</div>
                  )}
                </motion.article>
              );
            })}
            {/* Placeholder for future workshops */}
            <motion.div variants={fadeUp} className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-8 text-center min-h-[280px]">
              <span className="material-symbols-outlined text-muted-foreground text-4xl mb-3">add_circle</span>
              <p className="text-muted-foreground font-medium">{t("Más talleres próximamente", "More workshops coming soon")}</p>
              <p className="text-muted-foreground/60 text-sm mt-1">{t("Aquí se irán sumando nuevas experiencias", "New experiences will be added here")}</p>
            </motion.div>
          </motion.div>
        </section>

        {/* ===== PREMIOS Y RECONOCIMIENTOS ===== */}
        <section className="w-full px-6 py-16 max-w-7xl mx-auto">
          <motion.div
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-amber-500 text-3xl">emoji_events</span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                {t("Premios y Reconocimientos", "Awards & Recognition")}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-3xl">
              {t(
                "Reconocimientos obtenidos por la implementación de innovación tecnológica y herramientas de IA en la educación.",
                "Awards received for implementing technological innovation and AI tools in education."
              )}
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-amber-500/5 to-card border border-amber-500/20 rounded-2xl p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Info del premio */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                  <span className="material-symbols-outlined text-amber-500" style={{ fontSize: 16 }}>military_tech</span>
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">2026-I</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4">
                  {t("Premio Innovación Tecnológica — UPN", "Technological Innovation Award — UPN")}
                </h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {t(
                    "Reconocimiento otorgado por la Universidad Privada del Norte (UPN) por haber implementado herramientas de Inteligencia Artificial en las sesiones de clase 2026-I en provecho de los alumnos. La innovación de las nuevas herramientas de IA permite desarrollar nuevos talentos de los estudiantes a mi cargo.",
                    "Award granted by Universidad Privada del Norte (UPN) for implementing Artificial Intelligence tools in 2026-I class sessions for the benefit of students. The innovation of new AI tools enables developing new talents in students under my guidance."
                  )}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>school</span>
                    <span className="text-sm text-foreground font-medium">Universidad Privada del Norte</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                    <span className="material-symbols-outlined text-amber-500" style={{ fontSize: 18 }}>category</span>
                    <span className="text-sm text-foreground font-medium">{t("Categoría: Innovación Tecnológica", "Category: Technological Innovation")}</span>
                  </div>
                </div>
              </div>
              {/* Fotos del premio */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/images/premio-upn-docentes.jpeg"
                    alt="Docentes Premiados 2026-1 UPN"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <img
                    src="/images/premio-upn-jim.jpeg"
                    alt="Jim Klaus recibiendo premio UPN"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 rounded-xl overflow-hidden border border-border shadow-lg max-h-56">
                  <img
                    src="/images/premio-upn-ceremonia.jpeg"
                    alt="Ceremonia de premiación UPN 2026"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== CTA BOOKING ===== */}
        <section className="w-full px-6 py-16 bg-card border-y border-border">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <span className="material-symbols-outlined text-primary text-5xl mb-4">mic_external_on</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {t("¿Quieres que dicte un taller en tu organización?", "Want me to deliver a workshop at your organization?")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {t(
                "Diseño talleres y conferencias a medida sobre IA, retail analytics, transformación digital y liderazgo basado en datos. Contáctame para explorar posibilidades.",
                "I design custom workshops and conferences on AI, retail analytics, digital transformation and data-driven leadership. Contact me to explore possibilities."
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:consultas@implementareai.com"
                className="bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-bold rounded-lg px-8 py-3 flex items-center gap-2"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>mail</span>
                consultas@implementareai.com
              </a>
              <a
                href="https://wa.me/51947346877"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border hover:border-primary/40 transition-colors text-foreground font-bold rounded-lg px-8 py-3 flex items-center gap-2"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>phone</span>
                +51 947 346 877
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
