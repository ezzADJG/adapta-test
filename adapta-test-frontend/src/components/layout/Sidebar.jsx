/* eslint-disable no-undef */
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Settings,
  BarChart3,
  ChevronDown,
  CircleDotDashed, // Nuevo icono para sub-items (opcional)
  UserCheck // Icono para un futuro perfil o rol
} from "lucide-react";
import { useSelector } from "react-redux";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"; // Importar Collapsible
import React from "react";

// --- Componente SidebarLink (MEJORADO con hover/active más pronunciado) ---
// eslint-disable-next-line no-unused-vars
function SidebarLink({ icon: Icon, label, to, active, isCollapsed, isSubItem = false }) {
  const content = (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 py-2.5 rounded-lg transition-all duration-200 group font-medium",
        // Estilo activo "pestaña"
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        
        // Colapsado: cuadrado perfecto y centrado
        isCollapsed 
          ? "h-10 w-10 justify-center p-0 mx-auto"
          : "px-3", // Expandido: padding interno

        isSubItem && !isCollapsed && "pl-8 text-sm" // Sub-item indentado
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" /> 
      <span 
        className={cn(
          "transition-opacity whitespace-nowrap",
          isCollapsed && "opacity-0 hidden"
        )}
      >
        {label}
      </span>
    </Link>
  );

  if (isCollapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}

// --- Nuevo Componente SidebarAccordion para grupos colapsables ---
// eslint-disable-next-line no-unused-vars
function SidebarAccordion({ title, icon: Icon, isCollapsed, children }) {
  const [isOpen, setIsOpen] = React.useState(false); // Estado para abrir/cerrar sección

  // Resetear al colapsar el sidebar
  React.useEffect(() => {
    if (isCollapsed) setIsOpen(false);
  }, [isCollapsed]);

  const headerContent = (
    <div
      className={cn(
        "flex items-center gap-3 py-2.5 rounded-lg transition-all duration-200 group font-medium cursor-pointer",
        "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isCollapsed ? "h-10 w-10 justify-center p-0 mx-auto" : "px-3"
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0" />
      <span
        className={cn(
          "transition-opacity whitespace-nowrap",
          isCollapsed && "opacity-0 hidden"
        )}
      >
        {title}
      </span>
      {/* Flecha de expandir/contraer */}
      <ChevronDown
        className={cn(
          "ml-auto h-4 w-4 transition-transform",
          isOpen && "rotate-180",
          isCollapsed && "opacity-0 hidden"
        )}
      />
    </div>
  );

  // Si está colapsado, no hay acordeón, solo un link con tooltip
  if (isCollapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{headerContent}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        {headerContent}
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden">
        <div className="mt-1 space-y-1">
          {children} {/* Aquí van los SidebarLink anidados */}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

// --- Componente principal Sidebar ---
// eslint-disable-next-line no-unused-vars
export function Sidebar({ isCollapsed, onToggle }) { // Recibe onToggle
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const isActive = (path) => location.pathname === path || (path !== "/dashboard" && location.pathname.startsWith(path));

  return (
    <aside
      data-collapsed={isCollapsed}
      className={cn(
        "bg-card border-r shadow-lg transition-all duration-300 ease-in-out",
        "h-screen sticky top-0 left-0 z-40 flex flex-col", // Cambiado de fixed a sticky
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* 1. Logo Area con botón de toggle interno */}
      <div className={cn(
        "h-16 border-b flex items-center transition-all duration-300 relative", // Relative para el botón
        isCollapsed ? "justify-center px-2" : "px-4"
      )}>
        <Link to="/dashboard" className="flex items-center gap-2 overflow-hidden">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
            A
          </div>
          <div className={cn("flex flex-col transition-opacity", isCollapsed && "opacity-0 hidden")}>
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">AdaptaTest</span>
            <span className="text-xs text-muted-foreground whitespace-nowrap truncate">{user?.institution?.name}</span>
          </div>
        </Link>
      </div>

      {/* 2. Navigation Area: Ahora usa SidebarAccordion */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-4 space-y-4">
        {/* Los grupos ahora son SidebarAccordion */}
        <SidebarAccordion title="Principal" icon={LayoutDashboard} isCollapsed={isCollapsed}>
          <SidebarLink
            icon={CircleDotDashed} // Sub-item icon
            label="Dashboard"
            to="/dashboard"
            active={isActive("/dashboard")}
            isCollapsed={isCollapsed}
            isSubItem={true}
          />
          {user?.role === 'student' && (
            <SidebarLink
              icon={CircleDotDashed} // Sub-item icon
              label="Mis Cursos"
              to="/courses"
              active={isActive("/courses")}
              isCollapsed={isCollapsed}
              isSubItem={true}
            />
          )}
        </SidebarAccordion>

        <SidebarAccordion title="Académico" icon={GraduationCap} isCollapsed={isCollapsed}>
          {user?.role === 'professor' && (
            <SidebarLink
              icon={CircleDotDashed} // Sub-item icon
              label="Gestión de Cursos"
              to="/courses"
              active={isActive("/courses")}
              isCollapsed={isCollapsed}
              isSubItem={true}
            />
          )}
          <SidebarLink
            icon={CircleDotDashed} // Sub-item icon
            label="Progreso"
            to="/progress"
            active={isActive("/progress")}
            isCollapsed={isCollapsed}
            isSubItem={true}
          />
        </SidebarAccordion>

        {/* Un grupo normal sin acordeón para un solo link */}
        <SidebarLink
            icon={Settings}
            label="Ajustes"
            to="/settings"
            active={isActive("/settings")}
            isCollapsed={isCollapsed}
            isSubItem={false}
          />
      </nav>
    </aside>
  );
}