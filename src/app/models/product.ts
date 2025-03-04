export class Product {
    idProduct: number;
    name: string;
    description?: string;
    price: number;
    quantityInStock: number;
  
    constructor() {
      this.idProduct = 0;
      this.name = '';
      this.description = '';
      this.price = 0;
      this.quantityInStock = 0;
    }
  }
  