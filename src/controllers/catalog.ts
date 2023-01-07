import { Filter, ItemInfo, URLParameters } from '../base/base';
import product from '../models/product';

class CatalogController {
  private filter: Filter = {};

  constructor() {
    this.updateFilter();
  }

  getProducts(): ItemInfo[] {
    return product.getProducts(this.filter);
  }

  updateFilter(): void {
    const params = new URLSearchParams(window.location.search);

    this.filter.categories = params.getAll(URLParameters['categories']);
    this.filter.brands = params.getAll(URLParameters['brands']);
    this.filter.price = [
      +params.getAll(URLParameters['priceMin']),
      +params.getAll(URLParameters['priceMax']),
    ];
    this.filter.stock = [
      +params.getAll(URLParameters['stockMin']),
      +params.getAll(URLParameters['stockMax']),
    ];
  }
}

export default CatalogController;
