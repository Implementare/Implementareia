# Jim Klaus - Marca Personal (jimklaus.com)
## Guia Completa de Instalacion, Compilacion y Publicacion

---

## 1. Requisitos Previos

- **Node.js** v22+ (recomendado v22.13.0)
- **pnpm** v10+ (gestor de paquetes)
- Un servidor web (Vercel, Netlify, Railway, VPS, etc.)

---

## 2. Instalacion Local

Pasos:
1. Descomprimir el proyecto
2. cd jimklaus-web
3. pnpm install
4. Crear archivo de variables de entorno (ver seccion Variables de Entorno)
5. pnpm dev (servidor en http://localhost:3000)

---

## 3. Compilacion para Produccion

Ejecutar: pnpm build

Esto genera la carpeta dist/public/ con los archivos estaticos listos para desplegar.

---

## 4. Estructura del Proyecto

jimklaus-web/
  client/
    index.html          - HTML principal
    public/
      images/           - Todas las imagenes locales
    src/
      App.tsx           - Rutas principales
      index.css         - Estilos globales (tema oscuro, colores, fuentes)
      main.tsx          - Entry point de React
      pages/
        Home.tsx        - Pagina Sobre Jim (hero, articulos, canales)
        Speaking.tsx    - Pagina Temas y Enfoques (3 pilares)
        Workshops.tsx   - Pagina Talleres y Conferencias + Premios
        NotFound.tsx    - Pagina 404
      components/
        Navbar.tsx      - Barra de navegacion con escudo JK
        Footer.tsx      - Footer con datos de contacto
        ui/             - Componentes shadcn/ui
      contexts/
        LanguageContext.tsx - Contexto bilingue ES/EN
  server/               - Placeholder (no se usa en produccion estatica)
  shared/               - Constantes compartidas
  package.json
  vite.config.ts        - Configuracion de Vite + Storage Proxy
  tsconfig.json
  ideas.md              - Documento de diseno

---

## 5. Variables de Entorno Necesarias

Ver archivo env-example.txt incluido en el ZIP.

Variables principales:
- BUILT_IN_FORGE_API_URL: URL del API de Manus Forge (solo si usas Manus storage)
- BUILT_IN_FORGE_API_KEY: Clave del API de Manus Forge
- VITE_APP_TITLE: Jim Klaus - Marca Personal
- VITE_ANALYTICS_ENDPOINT: URL de analytics (opcional)
- VITE_ANALYTICS_WEBSITE_ID: ID del sitio en analytics (opcional)

NOTA: Si migras fuera de Manus, las variables de Forge NO son necesarias
si reemplazas las rutas de imagenes (ver seccion Migracion de Imagenes).

---

## 6. Migracion de Imagenes (IMPORTANTE)

El proyecto usa URLs de imagenes que dependen de Manus. Para migrar:

### A) Rutas /manus-storage/... (proxy de storage)
Reemplazar por /images/nombre-archivo:

| Ruta actual | Archivo local |
|---|---|
| /manus-storage/DiadelVendedorIA_4d4f7e1a.jpg | /images/vendedor-ia-evento.jpg |
| /manus-storage/EventoDiaMercadologo_21e176fb.jpeg | /images/evento-dia-mercadologo.jpeg |
| /manus-storage/TallerIAVentas_a1e7d206.jpeg | /images/taller-ia-ventas.jpeg |
| /manus-storage/WhatsAppImage2026-07-14at12.14.49PM_59370566.jpeg | /images/premio-upn-docentes.jpeg |
| /manus-storage/WhatsAppImage2026-07-14at12.14.50PM_fe38acef.jpeg | /images/premio-upn-jim.jpeg |
| /manus-storage/WhatsAppImage2026-07-14at12.14.28PM_0e7fbadf.jpeg | /images/premio-upn-ceremonia.jpeg |
| /manus-storage/upc-logo_ae5e5847.png | Descargar logo UPC de la web oficial |

### B) URLs de CloudFront (d2xsxph8kpxj0f.cloudfront.net)
- escudo-jk_7a6e15b7.png -> /images/escudo-jk.png
- ai-retail-abstract-*.webp -> /images/ai-retail-abstract.webp
- book-cover-mockup-*.webp -> /images/book-cover-mockup.webp
- conference-speaking-*.webp -> /images/conference-speaking.webp

### C) URLs de manuscdn (fotos profesionales de Jim)
- fkImBvkvAoQxtabp.png -> /images/jim-hero.png
- gXFeFIDbHZmAbNBJ.png -> /images/jim-speaking.png
- uhtvDVYkFiHMgYmQ.png -> /images/jim-academic.png

### D) Eliminar el Storage Proxy
Al migrar, elimina la funcion vitePluginStorageProxy() de vite.config.ts
y quitala del array plugins.

---

## 7. Hosting Actual

- Plataforma: Manus (modo Autoescalable/Serverless)
- Dominio principal: www.jimklaus.com
- Dominio raiz: jimklaus.com
- Registrador del dominio: Hostinger (originalmente GoDaddy)
- DNS configurado en Hostinger:
  - CNAME: www -> cname.manus.space
  - ALIAS: @ -> cname.manus.space
- SSL: Emitido automaticamente por Manus

---

## 8. Opciones de Hosting Alternativo

### Vercel (recomendado para sitios estaticos)
Instalar: npm i -g vercel
Desplegar: vercel --prod

Configurar vercel.json:
  buildCommand: pnpm build
  outputDirectory: dist/public
  framework: vite

### Netlify
En netlify.toml:
  [build]
    command = pnpm build
    publish = dist/public

### VPS (Nginx)
1. pnpm build
2. Copiar dist/public/ al directorio de Nginx
3. Configurar Nginx con try_files para SPA routing

---

## 9. Configuracion del Dominio al Migrar

1. En Hostinger, cambiar los registros DNS:
   - CNAME www -> apuntar al nuevo hosting
   - A @ -> IP del nuevo hosting
2. Esperar propagacion DNS (5 min - 2 horas)
3. Configurar SSL en el nuevo hosting (Let Encrypt automatico en Vercel/Netlify)

---

## 10. Tecnologias Utilizadas

| Tecnologia | Version | Uso |
|---|---|---|
| React | 19 | Framework UI |
| TypeScript | 5.6 | Tipado estatico |
| Vite | 7.1 | Build tool |
| Tailwind CSS | 4 | Estilos |
| Framer Motion | 12 | Animaciones |
| Wouter | 3.3 | Routing |
| shadcn/ui | Latest | Componentes UI |
| Radix UI | Latest | Primitivos accesibles |
| Lucide React | 0.453 | Iconos |

---

## 11. Funcionalidades del Sitio

- Bilingue: Espanol/Ingles con toggle en navbar
- Tema oscuro: Ejecutivo con azul electrico como acento
- 29 articulos reales de LinkedIn con filtro por mes
- 6 eventos/talleres con fotos reales
- Seccion Premios con galeria de fotos
- 3 pilares de conocimiento (Temas y Enfoques)
- 2 canales de YouTube (La Pregunta Correcta + Retail AI Lab)
- Formulario de contacto para contratacion de conferencias
- Responsive (mobile-first)
- Animaciones con Framer Motion

---

## 12. Notas Importantes

- No hay base de datos. Todo el contenido esta hardcodeado en los componentes React.
- Las imagenes de Unsplash usadas en articulos son URLs publicas y seguiran funcionando.
- El proyecto NO tiene backend real; el directorio server/ es un placeholder.
- Para agregar articulos, editar el array articles en Home.tsx.
- Para agregar eventos, editar el array workshops en Workshops.tsx.
