/*
 * Design: Executive Dark Command Center
 * Home page - Jim Klaus Personal Brand
 * Sections: Hero, Implementare AI CTA, Methodology, Talleres y Conferencias, Articles, Podcast, Book & Speaking
 * Dark theme, Lexend font, blue accent (#135bec)
 */
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { motion, type Variants, AnimatePresence } from "framer-motion";

// Foto terno azul sentado (1.Jim - biblioteca) -> Hero principal
const JIM_HERO_PHOTO = "/images/jim-hero.png";
// Foto traje azul fondo claro (1.JimKlausGood) -> Sección Speaking
const JIM_SPEAKING_PHOTO = "/images/jim-speaking.png";
const BOOK_IMG = "/images/book-cover-mockup.webp";
const AI_RETAIL_IMG = "/images/ai-retail-abstract.webp";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const { t } = useLanguage();

  /* ===== ARTÍCULOS ===== */
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tag: t("Forbes AI 50", "Forbes AI 50"),
      date: "Jul 2026",
      read: t("8 min lectura", "8 min read"),
      title: t("Mercor: La Paradoja de Entrenar a la IA que Te Reemplazará", "Mercor: The Paradox of Training the AI That Will Replace You"),
      desc: t(
        "Forbes AI 50 - 2026: Mercor paga a 30,000 contratistas más de $4M diarios para entrenar IA. Valorada en $10 mil millones, conecta profesionales desempleados con empresas como OpenAI y Google. ¿Estamos construyendo nuestra propia obsolescencia?",
        "Forbes AI 50 - 2026: Mercor pays 30,000 contractors over $4M daily to train AI. Valued at $10 billion, it connects unemployed professionals with companies like OpenAI and Google. Are we building our own obsolescence?"
      ),
      link: "https://www.linkedin.com/pulse/mercor-la-paradoja-de-entrenar-ia-que-te-reemplazar%C3%A1-jim-klaus-xfhpe",
    },
    {
      img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
      tag: t("Forbes AI 50", "Forbes AI 50"),
      date: "Jul 2026",
      read: t("7 min lectura", "7 min read"),
      title: t("Listen Labs: La IA que Entiende Cómo Te Sientes al Hablar", "Listen Labs: The AI That Understands How You Feel When You Speak"),
      desc: t(
        "Forbes AI 50 - 2026: Listen Labs realiza estudios de mercado masivos con entrevistadores IA que analizan tono de voz, microexpresiones y emociones. Más de 1 millón de entrevistas y $100M en financiación. El salto cualitativo en investigación de mercados.",
        "Forbes AI 50 - 2026: Listen Labs conducts massive market research with AI interviewers that analyze tone of voice, micro-expressions and emotions. Over 1 million interviews and $100M in funding. The qualitative leap in market research."
      ),
      link: "https://www.linkedin.com/pulse/listen-labs-la-ia-que-entiende-c%C3%B3mo-te-sientes-al-hablar-jim-klaus-gvfxe",
    },
    {
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tag: t("Tecnología", "Technology"),
      date: "Jun 2026",
      read: t("7 min lectura", "7 min read"),
      title: t("¿La IA Puede Diseñar su Propio Sucesor? Recursive Self-Improvement", "Can AI Design Its Own Successor? Recursive Self-Improvement"),
      desc: t(
        "El artículo de Anthropic 'When AI Builds Itself' aborda uno de los debates más críticos: ¿estamos cerca de que la IA pueda diseñar y construir su propio sucesor? En Anthropic, más del 80% del código es escrito por Claude. El concepto de RSI y sus implicaciones para la humanidad.",
        "Anthropic's article 'When AI Builds Itself' addresses one of the most critical debates: are we close to AI designing and building its own successor? At Anthropic, over 80% of code is written by Claude. The RSI concept and its implications for humanity."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_inteligenciaartificial-ia-recursiveselfimprovement-share-7469923853805477888-4vsC",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tag: t("Reflexión", "Reflection"),
      date: "Jun 2026",
      read: t("6 min lectura", "6 min read"),
      title: t("¿La Madurez de la IA? Magnifica Humanitas", "AI Maturity? Magnifica Humanitas"),
      desc: t(
        "Tres eventos aparentemente aislados nos muestran un punto de inflexión: estudiantes abucheando la IA, Nvidia admitiendo costos mayores que humanos, y el Papa León XIV alertando en su encíclica. ¿Ha surgido una conciencia colectiva sobre los impactos negativos de la IA?",
        "Three seemingly isolated events reveal a turning point: students booing AI, Nvidia admitting costs higher than humans, and Pope Leo XIV warning in his encyclical. Has a collective consciousness emerged about AI's negative impacts?"
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_magnifica-humanitas-activity-7465822289998049281-4cjY",
    },
    {
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      tag: t("Tendencias", "Trends"),
      date: "Feb 2026",
      read: t("8 min lectura", "8 min read"),
      title: t("IA en 2026: De Asistentes a Agentes Autónomos", "AI in 2026: From Assistants to Autonomous Agents"),
      desc: t(
        "Análisis de los lanzamientos clave de enero 2026: Prism, Genie 3, Claude CoWork, Manus Skills y Moltbook. La pregunta ya no es el 'qué' o el 'cómo', sino el ¿PARA QUÉ?",
        "Analysis of key January 2026 launches: Prism, Genie 3, Claude CoWork, Manus Skills, and Moltbook. The question is no longer 'what' or 'how', but WHY?"
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_nuestro-enfoque-en-materia-de-anuncios-y-activity-7424214120285188097-8XwQ",
    },
    {
      img: "https://images.unsplash.com/photo-1543168256-418811576931?w=600&h=400&fit=crop",
      tag: t("Marketing", "Marketing"),
      date: "Nov 2025",
      read: t("5 min lectura", "5 min read"),
      title: t("Coca-Cola: Campaña de Navidad 2025 100% Creada con IA", "Coca-Cola: 2025 Christmas Campaign 100% AI-Generated"),
      desc: t(
        "Coca-Cola ya tiene su campaña de Navidad 2025 y está 100% creada con IA. El genio ya salió de la lámpara. Análisis del impacto de la IA generativa en la publicidad global.",
        "Coca-Cola already has its 2025 Christmas campaign and it's 100% AI-generated. The genie is out of the bottle. Analysis of generative AI's impact on global advertising."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_coca-cola-holidays-are-coming-ai-generated-activity-7394039298196398080-mrCh",
    },
    {
      img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      tag: t("Tecnología", "Technology"),
      date: "Nov 2025",
      read: t("4 min lectura", "4 min read"),
      title: t("Pomelli: La Nueva Herramienta de Marketing de Google Labs", "Pomelli: Google Labs' New Marketing Tool"),
      desc: t(
        "Google anuncia el lanzamiento de Pomelli, una herramienta de marketing innovadora desde su laboratorio Google Labs. Análisis de sus capacidades y potencial para emprendedores.",
        "Google announces the launch of Pomelli, an innovative marketing tool from Google Labs. Analysis of its capabilities and potential for entrepreneurs."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_introducing-pomelli-google-labs-activity-7389047184043692032-SAnw",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      tag: t("Ética", "Ethics"),
      date: "Nov 2025",
      read: t("10 min lectura", "10 min read"),
      title: t("Superinteligencia: ¿Realmente es Bueno para la Humanidad?", "Superintelligence: Is It Really Good for Humanity?"),
      desc: t(
        "Reflexión sobre la carta abierta firmada por más de 800 figuras públicas que pide detener el desarrollo de la IA superinteligente. La IA como herramienta potente exige potente responsabilidad.",
        "Reflection on the open letter signed by 800+ public figures calling to halt superintelligent AI development. Powerful AI demands powerful responsibility."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_statement-on-superintelligence-activity-7387500988871360513-oVX6",
    },
    {
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tag: t("Tecnología", "Technology"),
      date: "Nov 2025",
      read: t("12 min lectura", "12 min read"),
      title: t("Computación Cuántica: Google, Comex y Atlas AI en la Carrera de Fondo", "Quantum Computing: Google, Comex & Atlas AI in the Long Race"),
      desc: t(
        "No es un duelo de buscadores, es una carrera de fondo. Willow: un paso crucial hacia la computación cuántica. Google nos recordó que la carrera no es de velocidad, sino de quién definirá los límites de la tecnología.",
        "It's not a search engine duel, it's a long-distance race. Willow: a crucial step toward quantum computing. Google reminded us the race isn't about speed, but who will define technology's limits."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_our-quantum-echoes-algorithm-is-a-big-step-activity-7386915319409459200-erjp",
    },
    {
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
      tag: t("Marketing", "Marketing"),
      date: "Sep 2025",
      read: t("5 min lectura", "5 min read"),
      title: t("Gemini Storybook: El Alquimista de Marcas", "Gemini Storybook: The Brand Alchemist"),
      desc: t(
        "Gemini de Google lanza Storybook, una herramienta maravillosa que crea historias de marca con audio de voz. Google lidera la gestión IA porque la pone a prueba en su creatividad.",
        "Google's Gemini launches Storybook, a wonderful tool that creates brand stories with voice audio. Google leads AI management by putting it to the test in creativity."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_gemini-el-alquimista-de-marcas-activity-7362536537260974080-CSSv",
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tag: t("Liderazgo", "Leadership"),
      date: "Sep 2025",
      read: t("15 min lectura", "15 min read"),
      title: t("El Aprendizaje del CEO: Liderazgo en la Era de la IA", "The CEO's Learning: Leadership in the AI Era"),
      desc: t(
        "Sam Altman y La Gentil Singularidad: equilibrio entre innovación y ética, adaptabilidad radical y humildad intelectual. Cuanto más poderosa se vuelve la tecnología, más humano debe ser el liderazgo.",
        "Sam Altman and The Gentle Singularity: balance between innovation and ethics, radical adaptability, and intellectual humility. The more powerful technology becomes, the more human leadership must be."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_sam-altman-activity-7361494851248422912-ideo",
    },
    {
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
      tag: t("Publicación", "Publication"),
      date: "Ago 2025",
      read: t("6 min lectura", "6 min read"),
      title: t("Revista Beta Gamma Sigma Perú: Primera Edición Digital", "Beta Gamma Sigma Peru Magazine: First Digital Edition"),
      desc: t(
        "Lanzamiento de la primera revista digital de Beta Gamma Sigma Perú. Un espacio de conocimiento y reflexión con expertos de diversas áreas para inspirar y aportar valor a la comunidad profesional.",
        "Launch of the first digital magazine of Beta Gamma Sigma Peru. A space for knowledge and reflection with experts from diverse areas to inspire and add value to the professional community."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_revista-beta-gamma-sigma-per%C3%BA-activity-7359368341628547075-pMz-",
    },
    {
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tag: t("Investigación", "Research"),
      date: "Sep 2025",
      read: t("10 min lectura", "10 min read"),
      title: t("Gemelos Digitales vs Persona Sintética", "Digital Twins vs Synthetic Persona"),
      desc: t(
        "Explorando las diferencias fundamentales entre gemelos digitales y personas sintéticas, y cómo cada tecnología está transformando la toma de decisiones en el retail.",
        "Exploring the fundamental differences between digital twins and synthetic personas, and how each technology is transforming decision-making in retail."
      ),
    },
    {
      img: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop",
      tag: t("Caso de Estudio", "Case Study"),
      date: "Ago 2025",
      read: t("6 min lectura", "6 min read"),
      title: t("#BackToStarbucks: Reinvención de Marca con IA", "#BackToStarbucks: Brand Reinvention with AI"),
      desc: t(
        "Análisis de la estrategia de reinvención de Starbucks y cómo la inteligencia artificial está transformando la experiencia del cliente en el sector cafetero.",
        "Analysis of Starbucks' reinvention strategy and how AI is transforming the customer experience in the coffee industry."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_backtostarbucks-activity-7356689399734022147-FQcH",
    },
    {
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      tag: t("Educación", "Education"),
      date: "Jun 2025",
      read: t("8 min lectura", "8 min read"),
      title: t("El Estado Actual de la Investigación en IA y Educación", "The Current State of Research on AI and Education"),
      desc: t(
        "Revisión del estado actual de la investigación sobre inteligencia artificial aplicada a la educación. Oportunidades y desafíos para el aprendizaje del futuro.",
        "Review of the current state of research on artificial intelligence applied to education. Opportunities and challenges for the future of learning."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_the-current-state-of-research-on-ai-and-education-activity-7330943720684408832-8H3K",
    },
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tag: t("Estrategia", "Strategy"),
      date: "Jun 2025",
      read: t("5 min lectura", "5 min read"),
      title: t("BBVA Amplía el Acuerdo con OpenAI a 11,000 Empleados", "BBVA Expands OpenAI Agreement to 11,000 Employees"),
      desc: t(
        "BBVA amplía su acuerdo con OpenAI para integrar IA en las operaciones de 11,000 empleados. Un caso de estudio sobre transformación digital en la banca.",
        "BBVA expands its OpenAI agreement to integrate AI into the operations of 11,000 employees. A case study on digital transformation in banking."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_bbva-ampl%C3%ADa-el-acuerdo-con-openai-a-11000-activity-7330320160186142720-4x3K",
    },

    {
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      tag: t("Educación", "Education"),
      date: "Apr 2025",
      read: t("7 min lectura", "7 min read"),
      title: t("Wharton y la IA: El Futuro de las Escuelas de Negocios", "Wharton and AI: The Future of Business Schools"),
      desc: t(
        "Análisis de cómo Wharton está integrando la inteligencia artificial en su programa académico. El futuro de la educación ejecutiva en la era de la IA.",
        "Analysis of how Wharton is integrating artificial intelligence into its academic program. The future of executive education in the AI era."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_wharton-ai-businessschool-activity-7316468806002909184-jetv",
    },
    {
      img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
      tag: t("Tecnología", "Technology"),
      date: "Apr 2025",
      read: t("8 min lectura", "8 min read"),
      title: t("Palantir: El Gigante de los Datos en la Era de la IA", "Palantir: The Data Giant in the AI Era"),
      desc: t(
        "Análisis de Palantir y su posicionamiento como líder en análisis de datos e inteligencia artificial para empresas y gobiernos.",
        "Analysis of Palantir and its positioning as a leader in data analytics and artificial intelligence for enterprises and governments."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_palantir-activity-7315452229350539264-UdF4",
    },
    {
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tag: t("Innovación", "Innovation"),
      date: "Mar 2025",
      read: t("5 min lectura", "5 min read"),
      title: t("Christie's y la IA: Revolución en el Mercado Inmobiliario de Lujo", "Christie's and AI: Revolution in Luxury Real Estate"),
      desc: t(
        "Porta da Frente Christie's lidera la transformación del mercado inmobiliario de lujo con inteligencia artificial. Un caso de innovación en el sector premium.",
        "Porta da Frente Christie's leads the transformation of luxury real estate with AI. An innovation case in the premium sector."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_porta-da-frente-christies-ag%C3%AAncia-imobili%C3%A1ria-activity-7310412728551030786-gQq0",
    },
    {
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      tag: t("Ética", "Ethics"),
      date: "Mar 2025",
      read: t("6 min lectura", "6 min read"),
      title: t("Deepfakes: Riesgos y Oportunidades de la IA Generativa", "Deepfakes: Risks and Opportunities of Generative AI"),
      desc: t(
        "Análisis de los deepfakes y su impacto en la sociedad. La IA generativa como herramienta de innovación tecnológica y los desafíos éticos que plantea.",
        "Analysis of deepfakes and their impact on society. Generative AI as a technological innovation tool and the ethical challenges it poses."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_deepfakes-ia-innovaciaejntecnolaejgica-activity-7308130729069068289-tZCV",
    },
    {
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tag: t("Innovación", "Innovation"),
      date: "Feb 2025",
      read: t("7 min lectura", "7 min read"),
      title: t("Inteligencia Artificial: Innovación que Transforma Industrias", "Artificial Intelligence: Innovation Transforming Industries"),
      desc: t(
        "Exploración de cómo la inteligencia artificial está transformando industrias enteras. Casos de uso, tendencias y el futuro de la innovación empresarial.",
        "Exploration of how artificial intelligence is transforming entire industries. Use cases, trends, and the future of business innovation."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_inteligenciaartificial-ia-innovaciaejn-activity-7303481309841018882-TJLj",
    },
    {
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tag: t("Educación", "Education"),
      date: "Feb 2025",
      read: t("4 min lectura", "4 min read"),
      title: t("Mapa Mental con IA en 3 Pasos", "Mind Map with AI in 3 Steps"),
      desc: t(
        "Guía práctica para crear mapas mentales utilizando inteligencia artificial en solo 3 pasos. Herramientas y metodología para profesionales.",
        "Practical guide to creating mind maps using artificial intelligence in just 3 steps. Tools and methodology for professionals."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_mapa-mental-con-ia-en-03-pasos-activity-7300287298829443072-PD3e",
    },
    {
      img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
      tag: t("Retail", "Retail"),
      date: "Jan 2025",
      read: t("6 min lectura", "6 min read"),
      title: t("IA y Moda: La Revolución del Retail Fashion", "AI and Fashion: The Fashion Retail Revolution"),
      desc: t(
        "Cómo la inteligencia artificial está revolucionando la industria de la moda. Desde el diseño hasta la cadena de suministro y la experiencia del cliente.",
        "How artificial intelligence is revolutionizing the fashion industry. From design to supply chain and customer experience."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_inteligenciaartificial-ia-moda-activity-7298004570159370241-zu0r",
    },
    {
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
      tag: t("Caso de Estudio", "Case Study"),
      date: "Jan 2025",
      read: t("5 min lectura", "5 min read"),
      title: t("Unilever: Innovando la Belleza con IA", "Unilever: Innovating Beauty with AI"),
      desc: t(
        "Unilever impulsa la innovación en el sector belleza con inteligencia artificial. Un caso de estudio sobre transformación digital en la industria de consumo masivo.",
        "Unilever drives innovation in the beauty sector with artificial intelligence. A case study on digital transformation in the FMCG industry."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_innovando-la-belleza-con-ia-unilever-impulsa-activity-7295450941070192640-sl7M",
    },
    {
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
      tag: t("Innovación", "Innovation"),
      date: "Dec 2024",
      read: t("5 min lectura", "5 min read"),
      title: t("Las Vegas: Primer Hotel Impulsado por IA", "Las Vegas: First AI-Powered Hotel"),
      desc: t(
        "Las Vegas estrenará el primer hotel impulsado completamente por inteligencia artificial. Un hito en la industria hotelera y la experiencia del huésped.",
        "Las Vegas will debut the first hotel fully powered by artificial intelligence. A milestone in the hospitality industry and guest experience."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_las-vegas-estrenar%C3%A1-el-primer-hotel-impulsado-activity-7293614666243592193-XeEy",
    },
    {
      img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      tag: t("Caso de Estudio", "Case Study"),
      date: "Dec 2024",
      read: t("6 min lectura", "6 min read"),
      title: t("NotCo: IA en el Desarrollo de Alimentos del Futuro", "NotCo: AI in Future Food Development"),
      desc: t(
        "NotCo y su apuesta con IA en el desarrollo de alimentos. Cómo la inteligencia artificial está creando la próxima generación de productos alimenticios.",
        "NotCo and its bet on AI in food development. How artificial intelligence is creating the next generation of food products."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_notco-y-su-apuesta-con-ia-en-el-desarrollo-activity-7292900623010721792-DDUa",
    },
    {
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tag: t("Tendencias", "Trends"),
      date: "Dec 2024",
      read: t("10 min lectura", "10 min read"),
      title: t("El Estado de la IA a Principios de 2024", "The State of AI in Early 2024"),
      desc: t(
        "Análisis completo del estado de la inteligencia artificial a principios de 2024. Tendencias, avances y predicciones para el futuro cercano.",
        "Comprehensive analysis of the state of artificial intelligence in early 2024. Trends, advances, and predictions for the near future."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_el-estado-de-la-ia-a-principios-de-2024-activity-7291437638220218368-4unR",
    },
    {
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      tag: t("Tecnología", "Technology"),
      date: "Nov 2024",
      read: t("8 min lectura", "8 min read"),
      title: t("4 Lecciones sobre el Caso DeepSeek", "4 Lessons from the DeepSeek Case"),
      desc: t(
        "Cuatro lecciones clave del caso DeepSeek. Análisis de lo que este caso nos enseña sobre el futuro de la IA y la competencia tecnológica global.",
        "Four key lessons from the DeepSeek case. Analysis of what this case teaches us about the future of AI and global tech competition."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_4-lecciones-sobre-el-caso-deepseek-activity-7290141106464251904-Es4l",
    },
    {
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      tag: t("Educación", "Education"),
      date: "Sep 2024",
      read: t("5 min lectura", "5 min read"),
      title: t("GCSE: Programa de Aprendizaje Adaptativo con IA", "GCSE: AI Adaptive Learning Programme"),
      desc: t(
        "Análisis del programa de aprendizaje adaptativo con IA de GCSE. Cómo la inteligencia artificial está personalizando la educación para cada estudiante.",
        "Analysis of GCSE's AI adaptive learning programme. How artificial intelligence is personalizing education for each student."
      ),
      link: "https://www.linkedin.com/posts/jimsanchezespejo_gcse-ai-adaptive-learning-programme-activity-7236922119597559808--cmX",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        {/* ===== HERO SECTION ===== */}
        <section className="w-full px-6 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="flex flex-col gap-6 order-2 lg:order-1"
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
                  {t("Disponible para Conferencias 2026", "Available for Speaking 2026")}
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
                {t("Análisis que ", "Analysis that ")}
                <span className="text-primary">{t("Transforma", "Transforms")}</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t(
                  "Conectando la teoría académica con la realidad del retail a través de más de 20 años de experiencia comercial, ahora junto a la potencia de herramientas de IA e insight de datos.",
                  "Bridging the gap between academic theory and retail reality through 20+ years of commercial experience, now powered by AI tools and Data insight."
                )}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/speaking"
                  className="bg-foreground hover:bg-foreground/90 text-background font-bold rounded-lg px-6 py-3.5 transition-colors flex items-center gap-2"
                >
                  {t("Ver Experiencia", "View Experience")}
                </Link>
                <a
                  href="#articles"
                  className="bg-card border border-border hover:border-primary/50 text-foreground font-bold rounded-lg px-6 py-3.5 transition-colors flex items-center gap-2 group"
                >
                  <span>{t("Leer Artículos", "Read Articles")}</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" style={{ fontSize: 18 }}>arrow_right_alt</span>
                </a>
              </motion.div>

              {/* Stats Row */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8 pt-8 border-t border-border">
                {[
                  { value: "20+", label: t("Años de Experiencia", "Years Experience") },
                  { value: "50+", label: t("Conferencias", "Conferences") },
                  { value: "5000+", label: t("Alumnos en Clases", "Students in Classes") },
                  { value: "35+", label: t("Publicaciones", "Publications") },
                  { value: "25+", label: t("Tesis Asesoradas", "Theses Advised") },
                  { value: "50+", label: t("Jurado de Tesis", "Thesis Jury") },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs md:text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-card border border-border group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>
                <img
                  src={JIM_HERO_PHOTO}
                  alt="Jim Klaus - Marketing, IA & Retail Strategist"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur border border-border rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">auto_graph</span>
                  <div>
                    <p className="text-foreground font-bold text-sm">{t("Último Insight", "Latest Insight")}</p>
                    <p className="text-muted-foreground text-xs">{t("Gemelos Digitales vs Persona Sintética", "Digital Twins vs Synthetic Persona")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== IMPLEMENTARE AI CTA ===== */}
        <section className="w-full px-6 py-8 max-w-7xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0a1628] to-[#0d1f3c] border border-primary/20 p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#135bec 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 border border-primary/30">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${AI_RETAIL_IMG}')` }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary">smart_toy</span>
                  <span className="text-primary font-bold tracking-wider text-sm uppercase">
                    Implementare AI
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                  {t("Manuales de Uso de Inteligencia Artificial", "AI Usage Manuals & Guides")}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                  {t(
                    "Aprende a implementar IA en tu negocio con nuestros manuales prácticos. Guías paso a paso diseñadas para profesionales que quieren dominar las herramientas de inteligencia artificial.",
                    "Learn to implement AI in your business with our practical manuals. Step-by-step guides designed for professionals who want to master artificial intelligence tools."
                  )}
                </p>
                <a
                  href="https://implementareai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <span>{t("Ver Manuales de IA", "Browse AI Manuals")}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== METHODOLOGY SECTION ===== */}
        <section className="w-full bg-card border-y border-border py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12 md:text-center max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                {t("El Método Analítico", "The Analytical Method")}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t(
                  "Mi filosofía descompone los desafíos complejos comerciales y del retail en estrategias accionables a través de un riguroso proceso de cuatro pasos.",
                  "My philosophy breaks down complex commercial and retail challenges into actionable strategies through a rigorous four-step process."
                )}
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              {[
                { icon: "database", title: t("Recolección de Datos", "Data Collection"), desc: t("Recopilando métricas de diversos puntos de contacto del retail para construir una base de verdad.", "Gathering metrics from diverse retail touchpoints to build a ground truth.") },
                { icon: "lightbulb", title: t("Generación de Insights", "Insight Generation"), desc: t("Aplicando modelos de IA y análisis estadístico para descubrir patrones ocultos y correlaciones.", "Applying AI models and statistical analysis to uncover hidden patterns and correlations.") },
                { icon: "map", title: t("Formulación de Estrategia", "Strategy Formulation"), desc: t("Desarrollando hojas de ruta basadas en evidencia para un crecimiento accionable y medible.", "Developing evidence-based roadmaps for actionable and measurable growth.") },
                { icon: "trending_up", title: t("Ejecución y Revisión", "Execution & Review"), desc: t("Monitoreando resultados en tiempo real e iterando la estrategia para mejora continua.", "Monitoring real-time results and iterating strategy for continuous improvement.") },
              ].map((step) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="bg-background border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block group-hover:scale-110 transition-transform">{step.icon}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== ARTICLES SECTION ===== */}
        <ArticlesSection articles={articles} t={t} fadeUp={fadeUp} stagger={stagger} />

        {/* ===== CANALES / CONTENIDO ===== */}
        <section className="w-full px-6 py-12 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary">play_circle</span>
              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                {t("Contenido", "Content")}
              </span>
            </div>
            <h2 className="text-3xl font-black text-foreground">
              {t("Canales y Podcasts", "Channels & Podcasts")}
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* La Pregunta Correcta - YouTube */}
            <motion.a
              href="https://www.youtube.com/@LaPreguntaCorrectaAI"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-background border border-border p-8 group hover:border-red-500/50 transition-all duration-300"
              variants={fadeUp}
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#3b4354 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-red-500 font-bold tracking-wider text-xs uppercase">YouTube</span>
                    <h3 className="text-xl font-black text-foreground group-hover:text-red-400 transition-colors">
                      {t("La Pregunta Correcta", "The Right Question")}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {t(
                    "Canal donde se cuestionan libros, se ense\u00f1a pensamiento cr\u00edtico de manera din\u00e1mica y simple. Aprende a cuestionar, analizar y pensar con claridad.",
                    "A channel where books are questioned, teaching critical thinking in a dynamic and simple way. Learn to question, analyze and think clearly."
                  )}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>notifications</span>
                    {t("Suscribirse", "Subscribe")}
                  </div>
                  <div className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                    {t("Ver en YouTube", "Watch on YouTube")}
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Retail AI Lab - YouTube */}
            <motion.a
              href="https://www.youtube.com/@RetailLAIlLab"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-card to-background border border-border p-8 group hover:border-emerald-500/50 transition-all duration-300"
              variants={fadeUp}
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#3b4354 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-emerald-500 font-bold tracking-wider text-xs uppercase">YouTube</span>
                    <h3 className="text-xl font-black text-foreground group-hover:text-emerald-400 transition-colors">
                      Retail AI Lab
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {t(
                    "Laboratorio de ideas donde exploramos c\u00f3mo la Inteligencia Artificial est\u00e1 transformando el retail, las ventas y la estrategia comercial. An\u00e1lisis, tendencias y casos reales.",
                    "Ideas lab exploring how Artificial Intelligence is transforming retail, sales and commercial strategy. Analysis, trends and real cases."
                  )}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>notifications</span>
                    {t("Suscribirse", "Subscribe")}
                  </div>
                  <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>open_in_new</span>
                    {t("Ver en YouTube", "Watch on YouTube")}
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </section>

        {/* ===== BOOKS (Próximamente) & SPEAKING SPLIT ===== */}
        <section className="w-full px-6 py-12 md:py-20 bg-card border-t border-border">
          <motion.div
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Books - Próximamente */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                <h2 className="text-3xl font-bold text-foreground">{t("Último Libro", "Latest Book")}</h2>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 md:w-40 shrink-0 aspect-[2/3] rounded shadow-2xl relative overflow-hidden group border border-border/50">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ backgroundImage: `url('${BOOK_IMG}')` }}
                  />
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                    <div className="text-center px-2">
                      <span className="material-symbols-outlined text-primary text-3xl mb-1">auto_stories</span>
                      <p className="text-foreground font-bold text-sm uppercase tracking-wider">{t("Próximamente", "Coming Soon")}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {t("Próximamente", "Coming Soon")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{t("Título pronto", "Title coming soon")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(
                      "Una guía de cómo gestionar desde el punto de vista de análisis comercial, desde el cuestionamiento y acción.",
                      "A guide on how to manage from the perspective of commercial analysis, from questioning to action."
                    )}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2 text-muted-foreground w-fit mt-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>schedule</span>
                    <span className="text-sm font-medium">{t("En desarrollo", "In development")}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Speaking */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">mic_external_on</span>
                <h2 className="text-3xl font-bold text-foreground">{t("Temas y Enfoques", "Topics & Focus")}</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                {t(
                  "Tres pilares de conocimiento: Inteligencia Comercial, Implementación de IA y Modelos de Pensamiento. Cada enfoque combina rigor académico con práctica empresarial real.",
                  "Three knowledge pillars: Commercial Intelligence, AI Implementation, and Thinking Models. Each focus combines academic rigor with real business practice."
                )}
              </p>

              <div className="mt-2">
                <Link
                  href="/speaking"
                  className="bg-foreground hover:bg-foreground/90 text-background font-bold rounded-lg px-6 py-3 transition-colors flex items-center gap-2 w-fit"
                >
                  <span>{t("Contratar a Jim", "Book Jim for Speaking")}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_month</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ===== ARTICLES SECTION COMPONENT WITH FILTER ===== */
interface Article {
  img: string;
  tag: string;
  date: string;
  read: string;
  title: string;
  desc: string;
  link?: string;
}

function ArticlesSection({ articles, t, fadeUp, stagger }: { articles: Article[]; t: (es: string, en: string) => string; fadeUp: Variants; stagger: Variants }) {
  const INITIAL_VISIBLE = 6;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  // Extract unique month/year combinations from articles
  const dateFilters = useMemo(() => {
    const unique = Array.from(new Set(articles.map((a) => a.date)));
    return unique;
  }, [articles]);

  // Filter articles based on selected month
  const filteredArticles = useMemo(() => {
    if (selectedFilter === "all") return articles;
    return articles.filter((a) => a.date === selectedFilter);
  }, [articles, selectedFilter]);

  // Limit visible articles
  const visibleArticles = showAll ? filteredArticles : filteredArticles.slice(0, INITIAL_VISIBLE);
  const hasMore = filteredArticles.length > INITIAL_VISIBLE;

  return (
    <section id="articles" className="w-full bg-card border-y border-border px-6 py-16">
      <motion.div
        className="max-w-7xl mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
          {t("Artículos e Investigación", "Articles & Research")}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-6">
          {t(
            "Exploraciones en la intersección de la IA, el Retail y el Comportamiento del Consumidor.",
            "Explorations at the intersection of AI, Retail, and Consumer Behavior."
          )}
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedFilter("all"); setShowAll(false); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              selectedFilter === "all"
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {t("Todos", "All")} ({articles.length})
          </button>
          {dateFilters.map((date) => (
            <button
              key={date}
              onClick={() => { setSelectedFilter(date); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedFilter === date
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-background/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {date} ({articles.filter((a) => a.date === date).length})
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <AnimatePresence mode="popLayout">
          {visibleArticles.map((article) => {
            const Wrapper = article.link ? 'a' : 'div';
            const wrapperProps = article.link ? { href: article.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            return (
              <motion.article
                key={article.title}
                variants={fadeUp}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col group cursor-pointer"
              >
                <Wrapper {...wrapperProps} className="flex flex-col flex-1">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-background border border-border">
                    <div
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${article.img}')` }}
                    />
                    <div className="absolute top-3 left-3 bg-card/90 backdrop-blur border border-border px-2 py-1 rounded text-xs font-bold text-foreground uppercase tracking-wider">
                      {article.tag}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{article.read}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{article.desc}</p>
                  {article.link && (
                    <span className="mt-3 text-primary text-sm font-semibold inline-flex items-center gap-1">
                      {t("Leer en LinkedIn", "Read on LinkedIn")}
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                    </span>
                  )}
                </Wrapper>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show more / Show less button */}
      {hasMore && !showAll && (
        <motion.div
          className="max-w-7xl mx-auto mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300 group"
          >
            {t("Ver todos los artículos", "View all articles")}
            <span className="text-sm text-muted-foreground">({filteredArticles.length - INITIAL_VISIBLE} {t("más", "more")})</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-y-0.5 transition-transform">expand_more</span>
          </button>
        </motion.div>
      )}
      {showAll && hasMore && (
        <motion.div
          className="max-w-7xl mx-auto mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300 group"
          >
            {t("Ver menos", "Show less")}
            <span className="material-symbols-outlined text-lg group-hover:-translate-y-0.5 transition-transform">expand_less</span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
