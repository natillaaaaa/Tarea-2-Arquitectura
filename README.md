# EIF-511 Arquitectura de Información — Tarea 2

Estudiante: Nathali Chacon Murillo

URL de publicación en Netlify:

## Cómo correrlo localmente

npm install
npm run dev

Luego abrir http://localhost:3000

## Cómo publicarlo en Netlify

1. Subir este proyecto a un repositorio de GitHub (sin la carpeta `node_modules`).
2. En Netlify, elegir "Add new site" > "Import an existing project" y conectar el repositorio.
3. Build command: `npm run generate`
4. Publish directory: `.output/public`
5. Deploy. Netlify detectará automáticamente el `netlify.toml` incluido en este proyecto.
