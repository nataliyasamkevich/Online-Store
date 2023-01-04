import { ItemInfo, Filter } from '../base/base';
import itemsInfo from '../data/items-info';

class Products {
  constructor(private data: ItemInfo[]) {
    //
  }

  get(filter: Partial<Filter>): ItemInfo[] {
    return this.data;
  }
}

const products = new Products(itemsInfo);

export default products;
