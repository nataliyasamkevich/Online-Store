import { Page } from '../base/base';
import Catalog from '../views/catalog';
import Settings from '../views/settings';
import Filters from '../views/filters';

class MainPage implements Page {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    const settingsBar = document.createElement('div');
    settingsBar.classList.add('settings');
    const settings = new Settings(settingsBar);

    const catalogContainer = document.createElement('div');
    catalogContainer.classList.add('catalog');
    const catalog = new Catalog(catalogContainer);

    const filterBar = document.createElement('div');
    filterBar.classList.add('filters');
    const filters = new Filters(filterBar);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main__container');

    mainContainer.append(settingsBar, catalogContainer, filterBar);
    this.container.append(mainContainer);
  }
}

export default MainPage;
