import { Filter, ItemInfo, URLParameters } from '../base/base';
import { updateFilter } from '../base/utilities';
import product from '../models/product';

class CatalogController {
  private filter: Filter = {};

  constructor() {
    this.updateFilter();
  }

  getProducts(): ItemInfo[] {
    return product.getProducts(this.filter);
  }

  getActiveView(): string | null {
    const params = new URLSearchParams(window.location.search);
    const res = params.get(URLParameters['view']);
    return res ? res : null;
  }

  updateFilter(): void {
    updateFilter(this.filter);
  }
}

export default CatalogController;
