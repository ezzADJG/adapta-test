// src/pages/DashboardPage.jsx
import { useSelector } from "react-redux";
import ProfessorDashboard from "../features/dashboard/ProfessorDashboard";
import StudentDashboard from "../features/dashboard/StudentDashboard";
import AdminDashboard from "../features/dashboard/AdminDashboard";
import CoordinatorDashboard from "../features/dashboard/CoordinatorDashboard";
import SuperAdminDashboard from "../features/dashboard/SuperAdminDashboard";
// Importaremos un futuro dashboard para padres
// import ParentDashboard from "../features/dashboard/ParentDashboard";

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <h1>Cargando...</h1>;
  }

  switch (user.role) {
    case "superadmin": // <-- NUEVO CASO
      return <SuperAdminDashboard />;
    case "admin":
      return <AdminDashboard />;
    case "coordinator":
      return user.institution?.type === "university" ? (
        <CoordinatorDashboard />
      ) : (
        <h1>Rol no disponible para esta institución.</h1>
      );
    case "professor":
      return <ProfessorDashboard />;
    case "student":
      return <StudentDashboard />;
    case "parent":
      return user.institution?.type === "high_school" ? (
        <h1>Dashboard de Padre (Próximamente)</h1>
      ) : (
        <h1>Rol no disponible para esta institución.</h1>
      );
    default:
      return <h1>Dashboard no disponible para el rol '{user.role}'.</h1>;
  }
};

export default DashboardPage;