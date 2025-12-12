import { Menu } from "lucide-react";

type TopbarProps = {
  onToggleSidebar: () => void;
};

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="h-14 border-b border-card-border bg-card-bg flex items-center px-4 md:px-6">
      <button
        onClick={onToggleSidebar}
        className="mr-3 p-2 rounded-md hover:bg-muted-bg"
      >
        <Menu className="w-5 h-5" />
      </button>

      <span className="text-sm text-text-secondary">
        Sistema de Gestión de Inventario · Demo
      </span>
    </header>
  );
}
