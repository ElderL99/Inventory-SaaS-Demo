import { products } from "@/src/DB/products";
import { movements } from "@/src/DB/movements";

export function getStock(productId: string) {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;

  const productMovements = movements.filter((m) => m.productId === productId);

  const totalEntries = productMovements
    .filter((m) => m.type === "entry")
    .reduce((acc, m) => acc + m.quantity, 0);

  const totalExits = productMovements
    .filter((m) => m.type === "exit")
    .reduce((acc, m) => acc + m.quantity, 0);

  return product.stock + totalEntries - totalExits;
}
