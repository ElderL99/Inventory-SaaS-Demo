"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LayoutDashboard,
  Package,
  ArrowDownToLine,
  ArrowUpFromLine,
  ChevronLeft,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Productos", href: "/dashboard/products", icon: Package },
  { name: "Entradas", href: "/dashboard/entries", icon: ArrowDownToLine },
  { name: "Salidas", href: "/dashboard/exits", icon: ArrowUpFromLine },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* OVERLAY MOBILE */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-white/95 md:hidden"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={clsx(
          "fixed md:static z-50 h-full w-64 bg-card-bg border-r border-card-border transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-card-border">
          <h1 className="text-lg font-semibold tracking-tight">
            Inventario Demo
          </h1>

          {/* CLOSE BUTTON (mobile & desktop) */}
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-muted-bg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* MENU */}
        <nav className="p-4 space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={clsx(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-muted-bg hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
