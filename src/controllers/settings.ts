import { Filter, URLParameters } from '../base/base';
import { updateFilter } from '../base/utilities';
import product from '../models/product';

class SettingsController {
  urlParams: URLSearchParams;
  private filter: Filter = {};
  constructor() {
    this.urlParams = new URLSearchParams();
  }

  countItemsFound(): number {
    updateFilter(this.filter);

    return product.getProducts(this.filter).length;
  }

  handleSearchItems(value: string): void {
    if (!value.length) return;

    const params = new URLSearchParams(window.location.search);
    params.set(URLParameters['search'], value);

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  getSearchValue(): string {
    const params = new URLSearchParams(window.location.search);
    const res = params.get(URLParameters['search']);
    return res ? res : '';
  }
}

export default SettingsController;
