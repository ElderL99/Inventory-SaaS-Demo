import StatCard from "@/src/components/ui/StatCartd";
import PageTitle from "@/src/components/ui/PageTitle";
import { products } from "@/src/DB/products";

export default function DashboardPage() {
  const total = products.length;
  const inStock = products.filter((p) => p.stock > 5).length;
  const lowStock = products.filter((p) => p.stock > 0 && p.stock <= 5).length;
  const outOfStock = products.filter((p) => p.stock === 0).length;

  return (
    <>
      <PageTitle title="Dashboard" subtitle="Resumen general del inventario" />

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Productos totales" value={total} />
        <StatCard title="En stock" value={inStock} />
        <StatCard title="Stock bajo" value={lowStock} />
        <StatCard title="Sin stock" value={outOfStock} />
      </section>
    </>
  );
}
