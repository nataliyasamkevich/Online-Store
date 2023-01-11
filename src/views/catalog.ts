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
    if (cards?.length) {
      this.container.style.display = 'grid';
      cards.forEach((card) => this.container.append(card));
    } else {
      this.container.append(this.drawPlaceholder());
      this.container.style.display = 'block';
    }
  }

  private drawPlaceholder(): HTMLElement {
    const placeholderText = document.createElement('div');
    placeholderText.classList.add('placeholder', 'catalog__placeholder');
    placeholderText.textContent =
      "Sorry, we couldn't find items matching your search request.\nTry another one!";

    return placeholderText;
  }

  draw(): void {
    this.container.innerHTML = '';
    this.container.classList.remove('catalog_grid', 'catalog_list');

    const actualView = this.controller.getActiveView();
    if (actualView) {
      switch (actualView) {
        case 'grid':
          this.container.classList.add('catalog_grid');
          break;

        case 'list':
          this.container.classList.add('catalog_list');
          break;
      }
    } else {
      this.container.classList.add('catalog_grid');
    }

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
