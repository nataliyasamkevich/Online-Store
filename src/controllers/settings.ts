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

  getSearchValue(): string {
    const params = new URLSearchParams(window.location.search);
    const res = params.get(URLParameters['search']);
    return res ? res : '';
  }

  handleSearchItems(value: string): void {
    const params = new URLSearchParams(window.location.search);

    if (!value.length) {
      params.delete(URLParameters['search']);
    } else {
      params.set(URLParameters['search'], value);
    }

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  getSortValue(): string | null {
    const params = new URLSearchParams(window.location.search);
    const resKey = params.get(URLParameters['sort']);
    let res: string | null;

    switch (resKey) {
      case 'price-high-to-low':
        res = 'Price: high to low';
        break;

      case 'price-low-to-high':
        res = 'Price: low to high';
        break;

      case 'popularity-high-to-low':
        res = 'Popularity: high to low';
        break;

      case 'popularity-low-to-high':
        res = 'Popularity: low to high';
        break;

      default:
        res = null;
        break;
    }
    return res;
  }

  getActiveSort(): string | null {
    const params = new URLSearchParams(window.location.search);
    const res = params.get(URLParameters['sort']);
    return res ? res : null;
  }

  handleSort(value: string) {
    const params = new URLSearchParams(window.location.search);

    params.set(URLParameters['sort'], value);

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

export default SettingsController;
