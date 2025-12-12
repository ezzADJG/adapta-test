# AdaptaTest LMS

Bienvenido a **AdaptaTest**, una plataforma educativa integral (LMS) diseñada para gestionar instituciones, cursos, evaluaciones y progreso académico.

## 📚 Documentación

Para facilitar la configuración y el uso del sistema, hemos preparado la siguiente documentación detallada:

- **[Manual Técnico](./TECHNICAL_MANUAL.md)**: Guía para desarrolladores. Incluye instrucciones de instalación, configuración de entorno, estructura del proyecto y detalles de la API.
- **[Manual de Usuario](./USER_MANUAL.md)**: Guía para usuarios finales. Explica cómo navegar por el sistema y utilizar las funcionalidades principales según el rol (Administrador, Profesor, Alumno, Padre), e incluye **credenciales de prueba**.

## 🚀 Inicio Rápido

1.  **Clonar el repositorio**:
    ```bash
    git clone <url-del-repo>
    ```
2.  **Instalar y configurar el Backend**:
    ```bash
    cd adapta-test-backend
    npm install
    npm run data:import # Carga datos de prueba
    npm run dev
    ```
3.  **Instalar y correr el Frontend**:
    ```bash
    cd adapta-test-frontend
    npm install
    npm run dev
    ```

Visita `http://localhost:5173` para comenzar.

## 🛠 Tecnologías

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Vite, TailwindCSS
