import Card from './card';
import products from '../models/products';

class Catalog {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  private drawCards(cards?: HTMLElement[]): void {
    this.container.innerHTML = '';
    if (cards) {
      cards.forEach((card) => this.container.append(card));
    } else {
      this.drawPlaceholder();
    }
  }

  private drawPlaceholder() {
    return null;
  }

  draw(): void {
    this.container.innerHTML = '';

    const cardsData = products.get({});
    const cards = cardsData.map((cardData) => {
      const card = new Card(cardData);
      return card.getElement();
    });

    this.drawCards(cards);
  }
}

export default Catalog;
