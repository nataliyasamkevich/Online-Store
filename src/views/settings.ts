import SettingsController from '../controllers/settings';

class SettingsView {
  private controller: SettingsController;

  constructor(protected container: HTMLElement) {
    this.controller = new SettingsController();
    this.draw();
    this.setHandlers();
  }

  draw(): void {
    this.container.innerHTML = '';

    const settingsContainer = document.createElement('div');
    settingsContainer.classList.add('settings__container');

    const itemsFoundContainer = document.createElement('div');
    itemsFoundContainer.classList.add('settings__found-container', 'found');

    const itemsFound = document.createElement('span');
    itemsFound.textContent = 'Items found:';

    const itemsFoundNum = document.createElement('span');
    itemsFoundNum.classList.add('found__num');
    itemsFoundNum.textContent = `${this.controller.countItemsFound()}`;

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('settings__controls', 'controls');

    const fieldsContainer = document.createElement('div');
    fieldsContainer.classList.add('controls__fields');

    const viewContainer = document.createElement('div');
    viewContainer.classList.add('controls__view', 'view');

    const currentView = this.controller.getActiveView();

    if (currentView) {
      switch (currentView) {
        case 'grid':
          viewContainer.dataset.type = 'grid';
          viewContainer.classList.add('view_grid');
          viewContainer.style.background =
            "url('./assets/svg/view-grid.svg') no-repeat center";
          break;

        case 'list':
          viewContainer.dataset.type = 'list';
          viewContainer.classList.add('view_list');
          viewContainer.style.background =
            "url('./assets/svg/view-list.svg') no-repeat center";
          break;
      }

      viewContainer.addEventListener('click', () => {
        const type = viewContainer.dataset.type;
        if (type) {
          switch (type) {
            case 'grid':
              this.controller.handleView('list');
              break;
            case 'list':
              this.controller.handleView('grid');
              break;

            default:
              break;
          }
        }
      });

      this.createSearchInput();
      fieldsContainer.append(this.createSearchInput(), this.createDropdown());
      controlsContainer.append(fieldsContainer, viewContainer);
      itemsFoundContainer.append(itemsFound, itemsFoundNum);
      settingsContainer.append(itemsFoundContainer, controlsContainer);

      this.container.append(settingsContainer);
    }
  }

  private createSearchInput(): HTMLElement {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('fields__search', 'search');

    const inputContainer = document.createElement('form');
    inputContainer.classList.add('input__container');

    const searchInput = document.createElement('input');
    searchInput.classList.add('search__input', 'input');
    searchInput.type = 'search';
    searchInput.name = 'search';
    searchInput.placeholder = 'Search for...';
    searchInput.value = this.controller.getSearchValue();

    searchInput.addEventListener('input', () => {
      [resetButton, searchButton].forEach((button) =>
        button.classList.add('active')
      );
    });

    inputContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      searchButton.click();
    });

    const searchButton = document.createElement('div');
    searchButton.classList.add('search-button');
    searchButton.addEventListener('click', () =>
      this.controller.handleSearchItems(searchInput.value.trim())
    );

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.type = 'reset';
    resetButton.addEventListener('click', () => {
      [resetButton, searchButton].forEach((button) => {
        searchInput.value = '';
        button.classList.remove('active');
      });
    });

    inputContainer.append(searchInput);
    searchContainer.append(inputContainer, searchButton, resetButton);
    return searchContainer;
  }

  private createDropdown(): HTMLElement {
    const selectContainer = document.createElement('div');
    selectContainer.classList.add('fields__select', 'select');

    const select = document.createElement('div');
    select.classList.add('select__input');

    const actualValue = this.controller.getSortValue() || 'Sort by';
    select.textContent = actualValue;

    select.addEventListener('click', (e) => this.handleDropdown(e));

    const optionList = document.createElement('div');
    optionList.classList.add('select__options');

    const optionPriceHigh = document.createElement('label');
    optionPriceHigh.textContent = 'Price: high to low';

    const inputPriceHigh = document.createElement('input');
    inputPriceHigh.type = 'radio';
    inputPriceHigh.name = 'sort';
    inputPriceHigh.dataset.type = 'sort';
    inputPriceHigh.dataset.value = 'price-high-to-low';

    const optionPriceLow = document.createElement('label');
    optionPriceLow.textContent = 'Price: low to high';

    const inputPriceLow = document.createElement('input');
    inputPriceLow.type = 'radio';
    inputPriceLow.name = 'sort';
    inputPriceLow.dataset.type = 'sort';
    inputPriceLow.dataset.value = 'price-low-to-high';

    const optionPopulHigh = document.createElement('label');
    optionPopulHigh.textContent = 'Popularity: high to low';

    const inputPopulHigh = document.createElement('input');
    inputPopulHigh.type = 'radio';
    inputPopulHigh.name = 'sort';
    inputPopulHigh.dataset.type = 'sort';
    inputPopulHigh.dataset.value = 'popularity-high-to-low';

    const optionPopulLow = document.createElement('label');
    optionPopulLow.textContent = 'Popularity: low to high';

    const inputPopulLow = document.createElement('input');
    inputPopulLow.type = 'radio';
    inputPopulLow.name = 'sort';
    inputPopulLow.dataset.type = 'sort';
    inputPopulLow.dataset.value = 'popularity-low-to-high';

    optionPriceHigh.append(inputPriceHigh);
    optionPriceLow.append(inputPriceLow);
    optionPopulHigh.append(inputPopulHigh);
    optionPopulLow.append(inputPopulLow);

    optionList.append(
      optionPriceHigh,
      optionPriceLow,
      optionPopulHigh,
      optionPopulLow
    );

    for (let i = 0; i < optionList.children.length; i++) {
      optionList.children[i].addEventListener('click', () => {
        const input = <HTMLElement>optionList.children[i].children[0];
        const attrValue = input.dataset.value;
        if (attrValue) {
          this.controller.handleSort(attrValue);
        }
      });
    }

    selectContainer.append(select, optionList);
    return selectContainer;
  }

  private handleDropdown(e: Event): void {
    if (e.target == e.currentTarget) {
      const sortMainField = this.container.querySelector('.select__input');
      const sortOptions = this.container.querySelector('.select__options');
      const selectBlock = this.container.querySelector('.select');

      [sortMainField, sortOptions, selectBlock].forEach((elem) => {
        if (elem) elem.classList.toggle('active');
      });
      if (sortMainField && e.target instanceof HTMLLabelElement) {
        sortMainField.textContent = e.target.textContent;
      }
    }
  }

  private setHandlers() {
    window.addEventListener('popstate', () => this.draw());
  }
}

export default SettingsView;
