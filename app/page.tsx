import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Sistema de Gestión de Inventario
        </h1>

        <p className="mt-4 text-text-secondary text-lg">
          Demo funcional para mostrar a clientes cómo puede verse y operar un
          sistema de inventario moderno y eficiente.
        </p>

        <div className="mt-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white text-sm font-medium hover:opacity-90 transition"
          >
            Ver demo
          </Link>
        </div>

        <p className="mt-6 text-xs text-text-secondary">
          * Proyecto demostrativo · Datos simulados
        </p>
      </div>
    </main>
  );
}
