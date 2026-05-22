import { Product } from "./product.js";

export class Poster extends Product {
  constructor(name, description, height, width, price, inStock = 0) {
    super(`Poster de ${name}`, description, price, inStock);
    this.height = height;
    this.width = width;
  }
}
