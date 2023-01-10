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

  updateFilter(): void {
    updateFilter(this.filter);
  }
}

export default CatalogController;
