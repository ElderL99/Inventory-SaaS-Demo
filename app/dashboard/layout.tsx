"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/src/components/layout/Sidebar";
import Topbar from "@/src/components/layout/Topbar";
import DemoBanner from "@/src/components/ui/DemoBanner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-muted-bg overflow-x-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col min-w-0">
        <DemoBanner />

        <Topbar onToggleSidebar={() => setSidebarOpen((v) => !v)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}
