import { Page } from '../base/base';
import Catalog from '../views/catalog';

class MainPage implements Page {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw() {
    const settingsBar = document.createElement('div');
    settingsBar.classList.add('settings');

    const catalogContainer = document.createElement('div');
    catalogContainer.classList.add('catalog');
    const catalog = new Catalog(catalogContainer);

    const filterBar = document.createElement('div');
    filterBar.classList.add('filters');

    this.container.append(settingsBar, catalogContainer, filterBar);
  }
}

export default MainPage;
