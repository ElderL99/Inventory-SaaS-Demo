export type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  createdAt: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Laptop Dell",
    category: "Electrónica",
    stock: 12,
    createdAt: "2025-01-01T10:30:00",
  },
  {
    id: "p2",
    name: "Mouse Logitech",
    category: "Accesorios",
    stock: 3,
    createdAt: "2025-01-02T14:20:00",
  },
  {
    id: "p3",
    name: "Monitor Samsung",
    category: "Electrónica",
    stock: 0,
    createdAt: "2025-01-03T09:15:00",
  },
  {
    id: "p4",
    name: "Teclado Mecánico",
    category: "Accesorios",
    stock: 18,
    createdAt: "2025-01-04T11:45:00",
  },
];
