# Manual de Usuario - AdaptaTest

Este manual guía a los usuarios a través de las funcionalidades principales de AdaptaTest, proporcionando credenciales de prueba y flujos de trabajo comunes.

## Acceso al Sistema

Para probar el sistema, asegúrese de que tanto el backend como el frontend estén en ejecución (ver Manual Técnico). Abra su navegador en \`http://localhost:5173\`.

### Credenciales de Prueba (Demo)

El sistema viene pre-cargado con usuarios para diferentes roles e instituciones.

| Rol | Institución | Email | Contraseña |
| :--- | :--- | :--- | :--- |
| **Super Admin** | N/A | \`superadmin@adaptatest.com\` | \`123456\` |
| **Admin** | Universidad Tecnológica (UTD) | \`admin@utd.com\` | \`123456\` |
| **Profesor** | Universidad Tecnológica (UTD) | \`profesor@utd.com\` | \`123456\` |
| **Alumno** | Universidad Tecnológica (UTD) | \`alumno@utd.com\` | \`123456\` |
| **Admin** | Colegio San Martín (CSM) | \`admin@csm.com\` | \`123456\` |
| **Profesor** | Colegio San Martín (CSM) | \`profesor@csm.com\` | \`123456\` |
| **Alumno** | Colegio San Martín (CSM) | \`alumno@csm.com\` | \`123456\` |
| **Padre** | Colegio San Martín (CSM) | \`padre@csm.com\` | \`123456\` |

## Flujos de Trabajo Principales

### 1. Inicio de Sesión
1.  En la página de inicio, haga clic en el botón de **Login** (esquina superior derecha).
2.  Ingrese el correo y contraseña de uno de los usuarios de prueba.
3.  Será redirigido a su **Dashboard** personalizado.

### 2. Vista de Estudiante
Inicie sesión como \`alumno@utd.com\`.
- **Dashboard:** Vea un resumen de sus cursos y progreso.
- **Mis Cursos:** Acceda a la lista de cursos matriculados (ej. "Cálculo I").
- **Aula Virtual:** Entre a un curso para ver:
    - **Lecciones:** Contenido educativo.
    - **Tareas:** Envíe sus trabajos pendientes.
    - **Exámenes:** Responda evaluaciones en línea.
- **Notas:** Consulte su récord académico y calificaciones.

### 3. Vista de Profesor
Inicie sesión como \`profesor@utd.com\`.
- **Gestión de Secciones:** Vea los cursos asignados (Cálculo I).
- **Creación de Contenido:** Agregue módulos, lecciones y recursos al curso.
- **Calificaciones:** Revise las tareas enviadas por los alumnos y asigne notas.
- **Asistencia:** (Si aplica) Registre la asistencia de los alumnos.

### 4. Vista de Administrador
Inicie sesión como \`admin@utd.com\`.
- **Gestión Institucional:** Configure los parámetros de la universidad.
- **Usuarios:** Cree o edite cuentas de profesores y alumnos.
- **Cursos y Matrículas:** Abra nuevos ciclos académicos y secciones.

### 5. Vista de Padre (Solo Colegios)
Inicie sesión como \`padre@csm.com\`.
- Supervise el progreso de su hijo (Alumno CSM).
- Vea calificaciones y asistencia.

## Soporte
Para reportar errores o solicitar ayuda técnica, contacte al equipo de desarrollo o cree un Issue en el repositorio de GitHub.
