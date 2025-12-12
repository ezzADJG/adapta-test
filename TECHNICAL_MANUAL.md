# Manual Técnico - AdaptaTest

Este documento describe la configuración técnica, instalación y puesta en marcha del proyecto **AdaptaTest**. El sistema es una plataforma educativa (LMS) compuesta por un backend en Node.js/Express y un frontend en React/Vite.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión v18 o superior recomendada)
- [MongoDB](https://www.mongodb.com/) (puede ser local o usar MongoDB Atlas)
- [Git](https://git-scm.com/)

## Estructura del Proyecto

El repositorio es un monorepo que contiene:

- \`adapta-test-backend/\`: API RESTful, modelos de base de datos y lógica de negocio.
- \`adapta-test-frontend/\`: Interfaz de usuario SPA (Single Page Application).

## Instalación y Configuración

### 1. Backend

1.  Navega a la carpeta del backend:
    \`\`\`bash
    cd adapta-test-backend
    \`\`\`

2.  Instala las dependencias:
    \`\`\`bash
    npm install
    \`\`\`

3.  Configura las variables de entorno:
    Crea un archivo \`.env\` en la raíz de \`adapta-test-backend\` con el siguiente contenido (ajusta según tu entorno):

    \`\`\`env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/adaptatest  # O tu string de conexión de Atlas
    JWT_SECRET=tu_secreto_super_seguro
    NODE_ENV=development
    \`\`\`

4.  **Carga de Datos de Prueba (Seeding):**
    Para facilitar las pruebas, el sistema incluye un script que puebla la base de datos con instituciones, usuarios y cursos por defecto.
    
    \`\`\`bash
    npm run data:import
    \`\`\`
    
    > **Nota:** Para borrar todos los datos, puedes usar \`npm run data:destroy\`.

5.  Iniciar el servidor:
    - Modo desarrollo (con recarga automática):
      \`\`\`bash
      npm run dev
      \`\`\`
    - Modo producción:
      \`\`\`bash
      npm start
      \`\`\`
    
    El servidor correrá en \`http://localhost:5000\` por defecto.

### 2. Frontend

1.  Navega a la carpeta del frontend:
    \`\`\`bash
    cd adapta-test-frontend
    \`\`\`

2.  Instala las dependencias:
    \`\`\`bash
    npm install
    \`\`\`

3.  Configura las variables de entorno (opcional si usas defaults):
    Crea un archivo \`.env\` si es necesario para apuntar a la API si cambias el puerto.
    
    \`\`\`env
    VITE_API_URL=http://localhost:5000/api
    \`\`\`

4.  Iniciar la aplicación:
    \`\`\`bash
    npm run dev
    \`\`\`
    
    La aplicación abrirá típicamente en \`http://localhost:5173\`.

## API Endpoints Principales

La API expone los siguientes recursos bajo \`/api\`:

- \`/users\`: Gestión de usuarios (auth, perfil).
- \`/courses\`: Gestión de cursos y lecciones.
- \`/institutions\`: Gestión de colegios y universidades.
- \`/enrollments\`: Matrículas de alumnos en secciones.
- \`/submissions\`: Envíos de tareas y evaluaciones.
- \`/grading\`: Calificaciones.
- \`/analytics\`: Datos para dashboards.

## Tecnologías

- **Backend:** Node.js, Express, Mongoose, JWT, Multer.
- **Frontend:** React, Vite, Tailwind CSS, Redux Toolkit, Radix UI.
