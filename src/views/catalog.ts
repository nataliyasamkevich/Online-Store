import Card from './card';
import CatalogController from '../controllers/catalog';

class Catalog {
  private controller = new CatalogController();

  constructor(private container: HTMLElement) {
    this.draw();
    this.setHandlers();
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

    const cardsData = this.controller.getProducts();
    const cards = cardsData.map((cardData) => {
      const card = new Card(cardData);
      return card.getElement();
    });

    this.drawCards(cards);
  }

  private setHandlers(): void {
    window.addEventListener('popstate', () => {
      this.controller.updateFilter();
      this.draw();
    });
  }
}

export default Catalog;
