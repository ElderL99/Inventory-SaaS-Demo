"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import PageTitle from "@/src/components/ui/PageTitle";
import { getProducts, getMovements, addMovement } from "@/src/lib/store";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Button } from "@/src/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

function formatDate(date: string) {
  return new Date(date).toLocaleString("es-MX", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

export default function ExitsPage() {
  const products = getProducts();
  const exits = getMovements().filter((m) => m.type === "exit");

  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAdd() {
    const product = products.find((p) => p.id === productId);
    if (!product || quantity <= 0) return;

    addMovement({
      id: uuid(),
      productId: product.id,
      productName: product.name,
      type: "exit",
      quantity,
      user: "Admin Demo",
      createdAt: new Date().toISOString(),
    });

    setOpen(false);
    setProductId("");
    setQuantity(1);
  }

  return (
    <>
      <PageTitle
        title="Salidas"
        subtitle="Registro de egresos del inventario"
      />

      {/* BOTÓN */}
      <div className="flex justify-end mb-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>Registrar salida</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva salida</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <select
                className="w-full rounded-md border px-3 py-2"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              >
                <option value="">Selecciona producto</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                min={1}
                className="w-full rounded-md border px-3 py-2"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
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
              <TableHead>Cantidad</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {exits.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>-{item.quantity}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{formatDate(item.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
