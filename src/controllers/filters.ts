import { URLParameters } from '../base/base';
import product from '../models/product';

class FiltersController {
  urlParams: URLSearchParams;
  constructor() {
    this.urlParams = new URLSearchParams();
  }

  getBrands(): string[] {
    return product.getBrands();
  }

  getCategories(): string[] {
    return product.getCategories();
  }

  getPriceRange(): [number, number] {
    return product.getPriceRange();
  }

  getActivePriceRange(): [number, number] {
    const [minPrice, maxPrice] = product.getPriceRange();

    const params = new URLSearchParams(window.location.search);
    const activePriceMinStr = params.get(URLParameters['priceMin']);
    const activePriceMaxStr = params.get(URLParameters['priceMax']);

    let activePriceMin: number, activePriceMax: number;

    if (activePriceMinStr) {
      activePriceMin = +activePriceMinStr;

      activePriceMin = Math.min(Math.max(activePriceMin, minPrice), maxPrice);
    } else {
      activePriceMin = minPrice;
    }

    if (activePriceMaxStr) {
      activePriceMax = +activePriceMaxStr;

      activePriceMax = Math.max(Math.min(activePriceMax, maxPrice), minPrice);
    } else {
      activePriceMax = maxPrice;
    }

    return [activePriceMin, activePriceMax];
  }

  getActiveStockRange(): [number, number] {
    const [minAmount, maxAmount] = product.getStockRange();

    const params = new URLSearchParams(window.location.search);
    const activePriceMinStr = params.get(URLParameters['stockMin']);
    const activePriceMaxStr = params.get(URLParameters['stockMax']);

    let activeStockMin: number, activeStockMax: number;

    if (activePriceMinStr) {
      activeStockMin = +activePriceMinStr;

      activeStockMin = Math.min(Math.max(activeStockMin, minAmount), maxAmount);
    } else {
      activeStockMin = minAmount;
    }

    if (activePriceMaxStr) {
      activeStockMax = +activePriceMaxStr;

      activeStockMax = Math.max(Math.min(activeStockMax, maxAmount), minAmount);
    } else {
      activeStockMax = maxAmount;
    }

    return [activeStockMin, activeStockMax];
  }

  getStockRange(): [number, number] {
    return product.getStockRange();
  }

  getActiveFilterCategories(): string[] {
    return this.getActiveFilter(URLParameters['categories']);
  }

  getActiveFilterBrands(): string[] {
    return this.getActiveFilter(URLParameters['brands']);
  }

  handleCategories(isChecked: boolean, category?: string): void {
    if (!category) return;

    const params = new URLSearchParams(window.location.search);
    const checkedCategories = params.getAll(URLParameters['categories']);

    if (isChecked) {
      checkedCategories.push(category);
    } else {
      checkedCategories.splice(checkedCategories.indexOf(category), 1);
    }
    params.delete(URLParameters['categories']);
    checkedCategories.forEach((elem) =>
      params.append(URLParameters['categories'], elem)
    );

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  handleBrands(isChecked: boolean, brand?: string): void {
    if (!brand) return;
    const params = new URLSearchParams(window.location.search);
    const checkedCategories = params.getAll(URLParameters['brands']);
    if (isChecked) {
      checkedCategories.push(brand);
    } else {
      checkedCategories.splice(checkedCategories.indexOf(brand), 1);
    }
    params.delete(URLParameters['brands']);
    checkedCategories.forEach((elem) =>
      params.append(URLParameters['brands'], elem)
    );
    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  handlePrices(priceMin: string, priceMax: string): void {
    const params = new URLSearchParams(window.location.search);

    params.delete(URLParameters['priceMin']);
    params.delete(URLParameters['priceMax']);

    params.append(URLParameters['priceMin'], priceMin);
    params.append(URLParameters['priceMax'], priceMax);

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  handleStock(amountMin: string, amountMax: string): void {
    const params = new URLSearchParams(window.location.search);

    params.delete(URLParameters['stockMin']);
    params.delete(URLParameters['stockMax']);

    params.append(URLParameters['stockMin'], amountMin);
    params.append(URLParameters['stockMax'], amountMax);

    history.pushState({}, '', '?' + params.toString() + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  private getActiveFilter(parameter: URLParameters): string[] {
    const params = new URLSearchParams(window.location.search);
    return params.getAll(parameter);
  }

  copyLink() {
    navigator.clipboard.writeText(window.location.href);
  }

  resetFilters() {
    history.pushState({}, '', '/' + location.hash);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

export default FiltersController;
