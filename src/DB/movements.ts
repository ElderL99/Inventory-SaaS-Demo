export type MovementType = "entry" | "exit";

export type Movement = {
  id: string;
  productId: string;
  productName: string;
  type: MovementType;
  quantity: number;
  user: string;
  createdAt: string;
};

export const movements: Movement[] = [
  {
    id: "m1",
    productId: "p2",
    productName: "Mouse Logitech",
    type: "entry",
    quantity: 10,
    user: "Admin Demo",
    createdAt: "2025-01-05T09:15:00",
  },
  {
    id: "m2",
    productId: "p1",
    productName: "Laptop Dell",
    type: "exit",
    quantity: 2,
    user: "Admin Demo",
    createdAt: "2025-01-06T16:40:00",
  },
  {
    id: "m3",
    productId: "p3",
    productName: "Monitor Samsung",
    type: "entry",
    quantity: 5,
    user: "Admin Demo",
    createdAt: "2025-01-07T11:30:00",
  },
  {
    id: "m4",
    productId: "p4",
    productName: "Teclado Mecánico",
    type: "exit",
    quantity: 4,
    user: "Admin Demo",
    createdAt: "2025-01-08T14:10:00",
  },
  {
    id: "m5",
    productId: "p2",
    productName: "Mouse Logitech",
    type: "entry",
    quantity: 15,
    user: "Admin Demo",
    createdAt: "2025-01-09T12:25:00",
  },
];
