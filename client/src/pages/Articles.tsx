/*
 * Design: Executive Dark Command Center
 * Articles & Academic Research page
 * Sections: Hero, Framework, Featured Article, Article Grid with filters, Sidebar
 * Dark theme, Lexend font, blue accent
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Article {
  id: number;
  category: string;
  categoryKey: string;
  img: string;
  date: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Estrategia de Retail",
    categoryKey: "retail",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop",
    date: "12 OCT, 2024",
    titleEs: "¿La muerte del centro comercial? No tan rápido.",
    titleEn: "The Death of the Mall? Not so fast.",
    descEs: "Análisis contrario de los espacios físicos de retail post-pandemia. Por qué las compras experienciales están impulsando un LTV más alto.",
    descEn: "Contrarian analysis of physical retail spaces post-pandemic. Why experiential shopping is actually driving higher LTV.",
  },
  {
    id: 2,
    category: "Analítica de Marketing",
    categoryKey: "analytics",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
    date: "28 SEP, 2024",
    titleEs: "Python vs. R para Analistas de Marketing",
    titleEn: "Python vs. R for Marketing Analysts",
    descEs: "Un estudio comparativo sobre eficiencia y escalabilidad al procesar grandes conjuntos de datos de consumidores.",
    descEn: "A comparative study on efficiency and scalability when processing large consumer datasets.",
  },
  {
    id: 3,
    category: "Comportamiento del Consumidor",
    categoryKey: "behavior",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
    date: "15 SEP, 2024",
    titleEs: "La Psicología de los Precios Dinámicos",
    titleEn: "The Psychology of Dynamic Pricing",
    descEs: "Entendiendo el umbral de confianza del consumidor. ¿Hasta dónde se puede empujar el precio personalizado?",
    descEn: "Understanding the consumer trust threshold. How far can you push personalized pricing before it backfires?",
  },
  {
    id: 4,
    category: "Estrategia de Retail",
    categoryKey: "retail",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop",
    date: "30 AGO, 2024",
    titleEs: "IA en la Optimización de la Cadena de Suministro",
    titleEn: "AI in Supply Chain Optimization",
    descEs: "Desde la previsión hasta la entrega de última milla. Revisando los últimos estudios de caso de Fortune 500.",
    descEn: "From forecasting to last-mile delivery. Reviewing the latest case studies from Fortune 500 retailers implementing generative AI.",
  },
  {
    id: 5,
    category: "Analítica de Marketing",
    categoryKey: "analytics",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&h=350&fit=crop",
    date: "12 AGO, 2024",
    titleEs: "Análisis de Sentimiento del Consumidor 2024",
    titleEn: "Consumer Sentiment Analysis 2024",
    descEs: "Aprovechando el PNL para decodificar las opiniones de los clientes a escala.",
    descEn: "Leveraging NLP to decode customer reviews at scale. What unstructured data tells us that surveys miss.",
  },
  {
    id: 6,
    category: "Comportamiento del Consumidor",
    categoryKey: "behavior",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop",
    date: "10 JUL, 2024",
    titleEs: "Programas de Lealtad en la Era Digital",
    titleEn: "Loyalty Programs in the Digital Age",
    descEs: "Gamificación vs. recompensas transaccionales. Una mirada a la adherencia de los marcos modernos de lealtad.",
    descEn: "Gamification vs. Transactional rewards. A look at the stickiness of modern loyalty frameworks in Gen Z markets.",
  },
];

const categories = [
  { key: "all", labelEs: "Toda la Investigación", labelEn: "All Research" },
  { key: "retail", labelEs: "Estrategia de Retail", labelEn: "Retail Strategy" },
  { key: "analytics", labelEs: "Analítica de Marketing", labelEn: "Marketing Analytics" },
  { key: "behavior", labelEs: "Comportamiento del Consumidor", labelEn: "Consumer Behavior" },
];

const popularTopics = [
  "#InteligenciaArtificial", "#TecnologíaRetail", "#DatosConsumidor",
  "#AnalíticaPredictiva", "#ComercioElectrónico", "#AprendizajeAutomático",
];

export default function Articles() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = activeFilter === "all" || a.categoryKey === activeFilter;
    const title = t(a.titleEs, a.titleEn).toLowerCase();
    const matchesSearch = !searchQuery || title.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        {/* ===== HERO ===== */}
        <section className="w-full px-6 pt-12 pb-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Title + Framework */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-primary font-bold tracking-wider text-sm uppercase">
                    {t("Investigación Académica", "Academic Research")}
                  </span>
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
                  {t("Análisis y Escritura Académica", "Analysis & Academic Writing")}
                </motion.h1>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mb-8">
                  {t(
                    "Explorando la intersección de la IA, el Retail y los Datos del Consumidor a través de investigación rigurosa y modelos predictivos.",
                    "Exploring the intersection of AI, Retail, and Consumer Data through rigorous research and predictive modeling."
                  )}
                </motion.p>

                {/* Analytical Framework */}
                <motion.div variants={fadeUp} className="bg-card border border-border rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary">schema</span>
                    <h3 className="text-lg font-bold text-foreground">{t("Marco Analítico", "Analytical Framework")}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        phase: t("Fase 1", "Phase 1"),
                        title: t("Recolección de Datos", "Data Collection"),
                        desc: t(
                          "Agregación de puntos de contacto omnicanal y flujos de comportamiento del consumidor en tiempo real.",
                          "Aggregation of omnichannel touchpoints and real-time consumer behavior flows."
                        ),
                      },
                      {
                        phase: t("Fase 2", "Phase 2"),
                        title: t("Modelado Predictivo", "Predictive Modeling"),
                        desc: t(
                          "Aplicación de algoritmos de aprendizaje automático para pronosticar tendencias de inventario y sentimiento.",
                          "Application of machine learning algorithms to forecast inventory trends and sentiment."
                        ),
                      },
                      {
                        phase: t("Fase 3", "Phase 3"),
                        title: t("Implementación Estratégica", "Strategic Implementation"),
                        desc: t(
                          "Traducir hallazgos cuantitativos en estrategias de retail accionables y escalables.",
                          "Translating quantitative findings into actionable and scalable retail strategies."
                        ),
                      },
                    ].map((item) => (
                      <div key={item.phase} className="flex flex-col gap-2">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{item.phase}</span>
                        <h4 className="text-foreground font-bold">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Search */}
              <motion.div
                className="bg-card border border-border rounded-xl p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-muted-foreground" style={{ fontSize: 20 }}>search</span>
                  <h4 className="text-foreground font-bold">{t("Buscar Artículos", "Search Articles")}</h4>
                </div>
                <input
                  type="text"
                  placeholder={t("Palabra clave, título...", "Keyword, title...")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground transition-colors"
                />
              </motion.div>

              {/* Academic Metrics */}
              <motion.div
                className="bg-card border border-border rounded-xl p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>bar_chart</span>
                  <h4 className="text-foreground font-bold">{t("Métricas Académicas", "Academic Metrics")}</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "1,240", label: t("Citas", "Citations") },
                    { value: "42", label: t("Artículos", "Articles") },
                    { value: "18", label: "H-Index" },
                    { value: "12", label: t("Premios", "Awards") },
                  ].map((m) => (
                    <div key={m.label} className="bg-background border border-border rounded-lg p-3 text-center">
                      <p className="text-xl font-bold text-foreground">{m.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter CTA */}
              <motion.div
                className="bg-primary/10 border border-primary/20 rounded-xl p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h4 className="text-foreground font-bold mb-2">{t("La Ventaja Analítica", "The Analytical Edge")}</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(
                    "Únete a más de 5,000 profesionales. Recibe las últimas investigaciones y marcos de trabajo semanalmente.",
                    "Join 5,000+ data-driven marketers. Get the latest research, frameworks, and insights weekly."
                  )}
                </p>
                <form onSubmit={(e) => { e.preventDefault(); toast.success(t("Suscrito correctamente", "Subscribed successfully")); }} className="flex flex-col gap-3">
                  <input
                    type="email"
                    placeholder={t("tu@email.com", "your@email.com")}
                    className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground"
                    required
                  />
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2.5 rounded-lg transition-colors text-sm">
                    {t("Suscríbete Gratis", "Subscribe for Free")}
                  </button>
                </form>
                <p className="text-muted-foreground text-xs mt-2">{t("Sin spam, cancela cuando quieras.", "No spam, unsubscribe anytime.")}</p>
              </motion.div>

              {/* Credentials */}
              <motion.div
                className="bg-card border border-border rounded-xl p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>verified</span>
                  <h4 className="text-foreground font-bold">{t("Credenciales y Afiliaciones", "Credentials & Affiliations")}</h4>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { org: "Stanford University", role: t("PhD, Ciencia de Marketing", "PhD, Marketing Science") },
                    { org: "NYU Stern", role: t("Profesor Adjunto", "Adjunct Professor") },
                    { org: "Data & Marketing Association", role: t("Miembro de la Junta", "Board Member") },
                  ].map((cred) => (
                    <div key={cred.org} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>school</span>
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-bold">{cred.org}</p>
                        <p className="text-muted-foreground text-xs">{cred.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Popular Topics */}
              <motion.div
                className="bg-card border border-border rounded-xl p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-foreground font-bold mb-3">{t("Temas Populares", "Popular Topics")}</h4>
                <div className="flex flex-wrap gap-2">
                  {popularTopics.map((topic) => (
                    <span key={topic} className="bg-background border border-border text-muted-foreground text-xs px-3 py-1.5 rounded-full hover:text-primary hover:border-primary/50 transition-colors cursor-pointer">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== FILTERS + ARTICLE GRID ===== */}
        <section className="w-full px-6 pb-20 max-w-7xl mx-auto">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                  activeFilter === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {t(cat.labelEs, cat.labelEn)}
              </button>
            ))}
          </motion.div>

          {/* Article Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={fadeUp}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-card border border-border">
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${article.img}')` }}
                  />
                  <div className="absolute top-3 left-3 bg-card/90 backdrop-blur border border-border px-2 py-1 rounded text-xs font-bold text-foreground uppercase tracking-wider">
                    {t(article.category, article.categoryKey === "retail" ? "Retail Strategy" : article.categoryKey === "analytics" ? "Marketing Analytics" : "Consumer Behavior")}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(article.titleEs, article.titleEn)}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {t(article.descEs, article.descEn)}
                </p>
                <span className="text-primary text-sm font-medium mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  {t("Leer Artículo", "Read Article")}
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </span>
              </motion.article>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-muted-foreground text-5xl mb-4 block">search_off</span>
              <p className="text-muted-foreground text-lg">
                {t("No se encontraron artículos con esos criterios.", "No articles found matching your criteria.")}
              </p>
            </div>
          )}

          {/* Load More */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => toast.info(t("Función próximamente disponible", "Feature coming soon"))}
                className="bg-card border border-border hover:border-primary/50 text-foreground font-bold px-8 py-3 rounded-lg transition-colors"
              >
                {t("Cargar Más Artículos", "Load More Articles")}
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
