import { products as initialProducts } from "@/src/DB/products";
import { movements as initialMovements } from "@/src/DB/movements";
import type { Product } from "@/src/DB/products";
import type { Movement } from "@/src/DB/movements";

let products = [...initialProducts];
let movements = [...initialMovements];

export function getProducts(): Product[] {
  return products;
}

export function addProduct(product: Product) {
  products = [...products, product];
}

export function getMovements(): Movement[] {
  return movements;
}

export function addMovement(movement: Movement) {
  movements = [...movements, movement];
}
