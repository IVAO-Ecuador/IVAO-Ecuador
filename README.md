This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
# IVAO Ecuador — Sitio web (Next.js + Tailwind + NextAuth)

Este repositorio contiene el sitio web de IVAO Ecuador, creado con Next.js (app router) y TypeScript. El proyecto incluye autenticación con NextAuth, integración con servicios como MySQL, envío de correos y utilidades para CMS/plantillas.

Este README documenta cómo configurar el entorno de desarrollo, ejecutar la aplicación, explicar la arquitectura y listar las variables de entorno más importantes.

## Tecnologías principales

- Next.js (app router) + TypeScript
- React 18
- TailwindCSS para estilos utilitarios
- Mantine (componentes UI)
- NextAuth para autenticación (con proveedor OIDC personalizado `ivao`)
- Express + `server.js` (server personalizado para despliegues en entornos que lo requieran)
- MySQL (`mysql2`) para persistencia (si se utiliza)
- Axios para peticiones HTTP
- React Query / @tanstack/react-query para cache y fetching
- Nodemailer + Handlebars para plantillas de correo

## Estructura relevante del repositorio

- `app/` — Rutas de la aplicación usando el App Router (Next 13+). Contiene páginas como `page.tsx`, `about`, `events`, `profile`, `api`.
- `auth/` — Integraciones de autenticación y proveedores.
	- `lib/auth.ts` — opciones de NextAuth y configuración del proveedor `ivao`.
- `components/` — Componentes React reutilizables (navegación, home, RFO, etc.).
- `public/` — Assets públicos: imágenes, logos, iconos de aerolíneas.
- `styles/` — CSS global y utilidades Tailwind + archivos CSS específicos.
- `server.js` — Servidor Node/Express muy pequeño que arranca Next.js y mapea un par de rutas (`/a`, `/b`) para compatibilidad.
- `next.config.js`, `tailwind.config.js`, `postcss.config.js` — configuraciones de build y estilos.

## Requisitos previos

- Node.js (recomendado v18+). Verifica con `node -v`.
- npm (incluido con Node) o pnpm/yarn si prefieres.
- Acceso a las variables de entorno necesarias (listadas abajo).

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto (no subir a git). Las variables importantes que aparecen en el proyecto son:

- NEXTAUTH_SECRET — Secreto para NextAuth (obligatorio).
- IVAO_WELL_KNOWN — URL well-known del proveedor OIDC de IVAO.
- IVAO_CLIENT_ID — Client ID para OIDC.
- IVAO_CLIENT_SECRET — Client Secret para OIDC.
- OAUTH_SCOPES — Scopes para la autorización (por ejemplo: "openid,email,profile").
- PORT — Puerto en el que correr el servidor (opcional, por defecto 3000).
- MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE — si usas MySQL.
- NODE_ENV — development | production (usado por scripts y server.js).

Ejemplo mínimo de `.env.local` (no usar valores reales aquí):

```
NEXTAUTH_SECRET=mi-secreto-fuerte
IVAO_WELL_KNOWN=https://id.ivao.aero/.well-known/openid-configuration
IVAO_CLIENT_ID=tu-client-id
IVAO_CLIENT_SECRET=tu-client-secret
OAUTH_SCOPES=openid,email,profile
PORT=3000
```

Si necesitas enviar correos (Nodemailer), añade las variables que tu servicio SMTP requiera (HOST, PORT, USER, PASS...).

## Comandos útiles

- Instalar dependencias:

	npm install

- Ejecutar en modo desarrollo (Next.js dev server):

	npm run dev

	- Abre: http://localhost:3000

- Construir para producción:

	npm run build

- Iniciar servidor en producción (usa el `server.js` custom):

	npm run start

- Ejecutar linter:

	npm run lint

Notas:
- El script `start` usa `NODE_ENV=production node server.js`. En Windows PowerShell la asignación de variable de entorno en línea no funciona igual. Para PowerShell podrías usar:

	$env:NODE_ENV='production'; node server.js

O ejecutar via cross-env si prefieres un enfoque multiplataforma (instalar `cross-env`).

## Desarrollo y flujo recomendado

1. Clona el repositorio y crea tu `.env.local` con las variables necesarias.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre `http://localhost:3000`.
4. Edita páginas en `app/` o componentes en `components/`. El hot reload aplicará los cambios.
5. Para probar autenticación localmente, asegúrate de que las URLs de redirección del proveedor IVAO estén configuradas para `http://localhost:3000` y que `IVAO_CLIENT_ID`/`IVAO_CLIENT_SECRET` sean válidos.

## Autenticación

La configuración de NextAuth se encuentra en `auth/lib/auth.ts`. El proyecto define un proveedor OIDC personalizado llamado `ivao`. Las piezas clave:

- `wellKnown`, `clientId`, `clientSecret` se toman desde variables de entorno.
- Se solicita `id_token` y `access_token` y se guarda el `accessToken` en el JWT en el callback `jwt`.

Si necesitas extender los callbacks (por ejemplo para persistir sesiones en la base de datos), edita `auth/lib/auth.ts` y añade un adaptador o callbacks adicionales.

## Server personalizado

`server.js` levanta un servidor Node simple que ejecuta Next.js. Adiciona dos rutas de ejemplo `/a` y `/b` para demostrar renderizado custom. En la mayoría de despliegues modernos en Vercel o plataformas serverless no necesitas `server.js`. Solo úsalo si tu hosting requiere un servidor Node tradicional (por ejemplo un VPS o Heroku con un único proceso Node).

## Notas sobre despliegue

- Vercel: Projecto listo para desplegar. Vercel detecta Next.js automáticamente. Añade tus variables de entorno en el panel de Vercel.
- Docker / VPS: Puedes usar `npm run build` y luego `npm run start` (asegúrate de exportar `NODE_ENV=production`).

Ejemplo básico Dockerfile (opcional):

```
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
ENV NODE_ENV=production
CMD ["node", "server.js"]
```

## Tests y calidad

Este repo no incluye tests automatizados por ahora. Recomendación:

- Añadir pruebas unitarias con Jest + React Testing Library para componentes.
- Añadir CI (GitHub Actions) para ejecutar linter y tests en PRs.

## Cosas a mejorar / pasos siguientes

- Añadir documentación de la API interna (endpoints bajo `app/api/`).
- Añadir pruebas básicas y pipeline CI.
- Centralizar la configuración de la base de datos con un helper y migraciones (por ejemplo `knex` o `prisma`).

## Contacto y contribuciones

Si quieres contribuir, crea un fork y un Pull Request. Incluye una descripción clara de cambios y cómo probarlos.

Para preguntas internas del proyecto, revisa los archivos en `auth/`, `app/api/` y `server.js`.

---

README generado/actualizado automáticamente para el repo `IVAO-Ecuador`.
