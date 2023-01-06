import ProductDetails from './product-details';
import products from '../models/products';

class ProductPage {
  constructor(
    protected container: HTMLElement,
    protected id: number
  ) {
    this.draw();
  }

  draw(): void {
    this.container.innerHTML = '';

    const cardsData = products.get({});
    const cards = cardsData.map((cardData, index) => {
      if (index == this.id) {
        const card = new ProductDetails(this.container, cardData);
        return card.getElement();
      }
    });
  }
}

export default ProductPage;
