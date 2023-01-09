import { ItemInfo, Filter, FilterFields } from '../base/base';
import itemsInfo from '../data/items-info';

class Product {
  private data = itemsInfo;
  constructor() {
    //
  }

  getProducts(filter: Filter): ItemInfo[] {
    let result = this.data;

    let key: FilterFields;
    for (key in filter) {
      const func = Product.filterMap[key];
      if (func) {
        result = result.filter(func(filter));
      }
    }
    return result;
  }

  getBrands(): string[] {
    return Array.from(new Set(itemsInfo.map((obj) => obj.brand)));
  }

  getCategories(): string[] {
    return Array.from(new Set(itemsInfo.map((obj) => obj.category)));
  }

  getPriceRange(): [number, number] {
    const pricesArray = itemsInfo.map((obj) => obj.price);
    return [Math.min(...pricesArray), Math.max(...pricesArray)];
  }

  getStockRange(): [number, number] {
    const amountArray = itemsInfo.map((obj) => obj.stock);
    return [Math.min(...amountArray), Math.max(...amountArray)];
  }

  private static filterMap: {
    [key in keyof Filter]: (filterData: Filter) => (item: ItemInfo) => boolean;
  } = {
    categories: (filterData: Filter) => (item: ItemInfo) => {
      const categories = filterData['categories'];
      if (categories && categories.length > 0) {
        return categories.includes(item.category);
      }
      return true;
    },
    brands: (filterData: Filter) => (item: ItemInfo) => {
      const brands = filterData['brands'];
      if (brands && brands.length > 0) {
        return brands.includes(item.brand);
      }
      return true;
    },
    stock: (filterData: Filter) => (item: ItemInfo) => {
      const stock = filterData['stock'];

      if (stock) {
        const [minAmount, maxAmount] = stock;
        let res = true;

        if (minAmount) {
          res = item.stock >= minAmount;
        }

        if (maxAmount) {
          res = res && item.stock <= maxAmount;
        }

        return res;
      }
      return true;
    },
    price: (filterData: Filter) => (item: ItemInfo) => {
      const price = filterData['price'];

      if (price) {
        const [minPrice, maxPrice] = price;
        let res = true;

        if (minPrice) {
          res = item.price >= minPrice;
        }

        if (maxPrice) {
          res = res && item.price <= maxPrice;
        }

        return res;
      }
      return true;
    },

    search: (filterData: Filter) => (item: ItemInfo) => {
      const search = filterData['search'];

      if (search?.length) {
        return Boolean(
          item.brand.toLowerCase().search(search) > -1 ||
            item.name.toLowerCase().search(search) > -1 ||
            item.volume.toString() === search ||
            item.description.search(search) > -1 ||
            item.category.toLowerCase().search(search) > -1 ||
            item.price.toString() === search
        );
      }

      return true;
    },
  };
}

const product = new Product();

export default product;
