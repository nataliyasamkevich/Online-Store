import { Page } from '../base/base';

import Catalog from './catalog';
import Settings from './settings';
import FiltersView from './filters';

class MainPageView implements Page {
  constructor(protected container: HTMLElement) {
    //this.draw();
  }

  draw(): void {
    this.container.innerHTML = '';

    const settingsBar = document.createElement('div');
    settingsBar.classList.add('settings');
    const settings = new Settings(settingsBar);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const catalogContainer = document.createElement('div');
    catalogContainer.classList.add('catalog');
    const catalog = new Catalog(catalogContainer);

    const filterBar = document.createElement('div');
    filterBar.classList.add('filters');
    const filters = new FiltersView(filterBar);

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main__container');

    contentContainer.append(filterBar, catalogContainer);
    mainContainer.append(settingsBar, contentContainer);
    this.container.append(mainContainer);
  }
}

export default MainPageView;
