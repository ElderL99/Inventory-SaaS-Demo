"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import { getStock } from "@/src/lib/inventory";

import PageTitle from "@/src/components/ui/PageTitle";
import { getProducts, addProduct } from "@/src/lib/store";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/src/components/ui/dialog";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const products = getProducts();

  const [_, forceUpdate] = useState(0);

  function refresh() {
    forceUpdate((n) => n + 1);
  }

  function handleAdd() {
    if (!name || !category) return;

    addProduct({
      id: uuid(),
      name,
      category,
      stock: 0,
      createdAt: new Date().toISOString(),
    });

    refresh(); // 👈 CLAVE

    setOpen(false);
    setName("");
    setCategory("");
  }

  const filteredByCategory = products.filter((product) => {
    if (!category) return true;
    return product.category === category;
  });

  return (
    <>
      <PageTitle title="Productos" subtitle="Listado general del inventario" />

      {/* BOTÓN */}
      <div className="flex justify-end mb-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Agregar producto</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo producto</DialogTitle>
              <DialogDescription>
                Agrega un nuevo producto al inventario
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <input
                className="w-full rounded-md border px-3 py-2"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="w-full rounded-md border px-3 py-2"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />

              <Button className="w-full" onClick={handleAdd}>
                Guardar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* TABLA */}

      <div className="rounded-2xl border border-card-border bg-card-bg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products.map((product) => {
              const stock = getStock(product.id);

              const status =
                stock === 0 ? "Sin stock" : stock <= 5 ? "Bajo" : "Disponible";

              return (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        status === "Disponible"
                          ? "default"
                          : status === "Bajo"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {status}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
