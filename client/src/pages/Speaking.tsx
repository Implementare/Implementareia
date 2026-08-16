/*
 * Design: Executive Dark Command Center
 * Temas y Enfoques page - 3 pilares de conocimiento
 * Dark theme, Lexend font, blue accent (#135bec)
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const CONFERENCE_IMG = "/images/conference-speaking.webp";
const JIM_SPEAKING_PHOTO = "/images/jim-hero.png";
const JIM_ACADEMIC_PHOTO = "/images/jim-academic.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Speaking() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("Solicitud enviada correctamente. Nos pondremos en contacto pronto.", "Inquiry sent successfully. We'll get back to you soon."));
    setFormData({ name: "", email: "", message: "" });
  };

  const enfoques = [
    {
      icon: "analytics",
      title: t("Análisis y Estrategia Comercial", "Analysis & Commercial Strategy"),
      subtitle: t("Inteligencia Comercial", "Commercial Intelligence"),
      description: t(
        "Mi visión sobre cómo el sector retail y los canales comerciales deben evolucionar utilizando datos, analítica y un entendimiento profundo del consumidor actual. El futuro del comercio no está en vender más, sino en entender mejor para decidir con precisión.",
        "My vision on how retail and commercial channels must evolve using data, analytics, and a deep understanding of today's consumer. The future of commerce isn't about selling more, but understanding better to decide with precision."
      ),
      topics: [
        t("Evolución del retail moderno", "Modern retail evolution"),
        t("Analítica de datos para decisiones comerciales", "Data analytics for commercial decisions"),
        t("Comportamiento del consumidor digital", "Digital consumer behavior"),
        t("Estrategia omnicanal basada en evidencia", "Evidence-based omnichannel strategy"),
      ],
      color: "from-blue-500/20 to-blue-600/5",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: "smart_toy",
      title: t("Adopción e Implementación de Inteligencia Artificial", "AI Adoption & Implementation"),
      subtitle: t("De la Teoría a la Práctica Empresarial", "From Theory to Business Practice"),
      description: t(
        "Cómo la IA — especialmente los ecosistemas de agentes inteligentes y el uso de datos sintéticos — está transformando la toma de decisiones estratégicas. Mi enfoque baja la tecnología de la teoría a la práctica empresarial real, haciendo que la IA sea accionable para cualquier organización.",
        "How AI — especially intelligent agent ecosystems and synthetic data — is transforming strategic decision-making. My approach brings technology from theory to real business practice, making AI actionable for any organization."
      ),
      topics: [
        t("Agentes inteligentes y automatización", "Intelligent agents & automation"),
        t("Datos sintéticos para investigación de mercados", "Synthetic data for market research"),
        t("IA generativa aplicada al negocio", "Generative AI applied to business"),
        t("Transformación digital con IA responsable", "Digital transformation with responsible AI"),
      ],
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      icon: "psychology",
      title: t("Modelos de Pensamiento y Lógica de Negocios", "Thinking Models & Business Logic"),
      subtitle: t("Rigor Metodológico Aplicado", "Applied Methodological Rigor"),
      description: t(
        "Cómo aplicar marcos estructurados, rigor metodológico y pensamiento crítico para descomponer problemas complejos en las organizaciones. No se trata de tener más información, sino de pensar mejor con la información disponible.",
        "How to apply structured frameworks, methodological rigor, and critical thinking to break down complex problems in organizations. It's not about having more information, but thinking better with available information."
      ),
      topics: [
        t("Frameworks de resolución de problemas", "Problem-solving frameworks"),
        t("Pensamiento crítico para líderes", "Critical thinking for leaders"),
        t("Metodologías ágiles en estrategia", "Agile methodologies in strategy"),
        t("Toma de decisiones bajo incertidumbre", "Decision-making under uncertainty"),
      ],
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "border-amber-500/30",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        {/* ===== HERO SECTION ===== */}
        <section className="w-full relative overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('${CONFERENCE_IMG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left: Text (3 cols) */}
              <motion.div
                className="lg:col-span-3 flex flex-col gap-6"
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {t("Disponible para Conferencias 2026", "Available for 2026 Conferences")}
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
                  {t("Temas y ", "Topics & ")}
                  <span className="text-primary">{t("Enfoques", "Focus")}</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {t(
                    "Más de 20 años de experiencia comercial condensados en tres pilares de conocimiento. Cada enfoque combina rigor académico, práctica empresarial real y una visión actualizada del mercado.",
                    "Over 20 years of commercial experience condensed into three knowledge pillars. Each focus combines academic rigor, real business practice, and an updated market vision."
                  )}
                </motion.p>

                {/* Stats */}
                <motion.div variants={fadeUp} className="flex gap-4 mt-4">
                  {[
                    { value: "50+", label: t("Conferencias", "Conferences") },
                    { value: "20+", label: t("Años Exp", "Years Exp") },
                    { value: "5000+", label: t("Estudiantes", "Students") },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-card border border-border rounded-xl px-5 py-4 text-center flex-1">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: Photo (2 cols) */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto shadow-2xl">
                  <img
                    src={JIM_SPEAKING_PHOTO}
                    alt="Jim Klaus - Speaker & Consultant"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== 3 ENFOQUES SECTION ===== */}
        <section className="w-full px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {t("Tres Pilares de Conocimiento", "Three Knowledge Pillars")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t(
                "Cada pilar representa un área de expertise donde convergen la investigación académica, la experiencia comercial y la innovación tecnológica.",
                "Each pillar represents an area of expertise where academic research, commercial experience, and technological innovation converge."
              )}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {enfoques.map((enfoque, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`relative rounded-2xl border ${enfoque.borderColor} bg-gradient-to-br ${enfoque.color} backdrop-blur-sm p-8 md:p-10 overflow-hidden group hover:border-primary/40 transition-all duration-500`}
              >
                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left: Icon + Title */}
                  <div className="lg:col-span-1 flex flex-col gap-4">
                    <div className={`w-16 h-16 rounded-xl ${enfoque.iconBg} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${enfoque.iconColor}`} style={{ fontSize: 32 }}>{enfoque.icon}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("Enfoque", "Focus")} {idx + 1}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 leading-tight">{enfoque.title}</h3>
                      <p className="text-sm text-primary font-semibold mt-2">{enfoque.subtitle}</p>
                    </div>
                  </div>

                  {/* Right: Description + Topics */}
                  <div className="lg:col-span-2 flex flex-col gap-5">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {enfoque.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {enfoque.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>check_circle</span>
                          <span className="text-sm text-foreground/80">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ===== BOOKING FORM SECTION ===== */}
        <section className="w-full bg-card border-y border-border px-6 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: CTA Text */}
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                {t("¿Interesado en una ", "Interested in a ")}
                <span className="text-primary">{t("Conferencia?", "Conference?")}</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                {t(
                  "Cada presentación es personalizada según las necesidades de tu organización, evento o institución educativa. Combino datos reales, casos prácticos y una narrativa que conecta con la audiencia.",
                  "Each presentation is customized to your organization's, event's, or educational institution's needs. I combine real data, practical cases, and a narrative that connects with the audience."
                )}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-2">
                {[
                  t("Conferencias corporativas y ejecutivas", "Corporate & executive conferences"),
                  t("Talleres universitarios y académicos", "University & academic workshops"),
                  t("Eventos de industria y tecnología", "Industry & technology events"),
                  t("Capacitaciones in-house para equipos", "In-house team training"),
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>arrow_right</span>
                    <span className="text-foreground/90 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Booking Form */}
            <motion.div
              className="bg-background border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">event_available</span>
                <h3 className="text-xl font-bold text-foreground">
                  {t("Contrata a Jim para tu Evento", "Book Jim for your Event")}
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={t("Tu Nombre", "Your Name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder={t("Correo de Trabajo", "Work Email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
                  required
                />
                <textarea
                  placeholder={t("Cuéntanos sobre tu evento...", "Tell us about your event...")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {t("Enviar Solicitud", "Send Inquiry")}
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
