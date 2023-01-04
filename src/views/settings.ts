class Settings {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    const settingsContainer = document.createElement('div');
    settingsContainer.classList.add('settings__container');

    const itemsFoundContainer = document.createElement('div');
    itemsFoundContainer.classList.add('settings__found-container', 'found');

    const itemsFound = document.createElement('span');
    itemsFound.textContent = 'Items found:';

    const itemsFoundNum = document.createElement('span');
    itemsFoundNum.classList.add('found__num');
    itemsFoundNum.textContent = '62';
    //TODO: check for available items amount

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('settings__controls', 'controls');

    const fieldsContainer = document.createElement('div');
    fieldsContainer.classList.add('controls__fields');

    const viewContainer = document.createElement('div');
    viewContainer.classList.add('controls__view', 'view');
    viewContainer.style.background =
      'url(./../../assets/svg/view-grid.svg) no-repeat center';

    this.createSearchInput();
    fieldsContainer.append(this.createSearchInput(), this.createDropdown());
    controlsContainer.append(fieldsContainer, viewContainer);
    itemsFoundContainer.append(itemsFound, itemsFoundNum);
    settingsContainer.append(itemsFoundContainer, controlsContainer);

    this.container.append(settingsContainer);
  }

  private createSearchInput(): HTMLElement {
    const searchContainer = document.createElement('form');
    searchContainer.classList.add('fields__search', 'search');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input__container');

    const searchInput = document.createElement('input');
    searchInput.classList.add('search__input', 'input');
    searchInput.type = 'search';
    searchInput.placeholder = 'Search for...';

    searchInput.addEventListener('input', () => {
      [resetButton, searchButton].forEach((button) =>
        button.classList.add('active')
      );
    });

    const searchButton = document.createElement('div');
    searchButton.classList.add('search-button');

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset-button');
    resetButton.type = 'reset';
    resetButton.addEventListener('click', () => {
      [resetButton, searchButton].forEach((button) =>
        button.classList.remove('active')
      );
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
    select.textContent = 'Sort by';

    select.addEventListener('click', (e) => this.handleDropdown(e));

    const optionList = document.createElement('div');
    optionList.classList.add('select__options');

    const optionPriceHigh = document.createElement('div');
    optionPriceHigh.textContent = 'Price: high to low';

    const optionPriceLow = document.createElement('div');
    optionPriceLow.textContent = 'Price: low to high';

    const optionPopulHigh = document.createElement('div');
    optionPopulHigh.textContent = 'Popularity: high to low';

    const optionPopulLow = document.createElement('div');
    optionPopulLow.textContent = 'Popularity: low to high';

    optionList.append(
      optionPriceHigh,
      optionPriceLow,
      optionPopulHigh,
      optionPopulLow
    );

    for (let i = 0; i < optionList.children.length; i++) {
      optionList.children[i].addEventListener('click', (e) =>
        this.handleDropdown(e)
      );
    }

    selectContainer.append(select, optionList);
    return selectContainer;
  }

  private handleDropdown(e: Event): void {
    const sortMainField = this.container.querySelector('.select__input');
    const sortOptions = this.container.querySelector('.select__options');
    const selectBlock = this.container.querySelector('.select');

    [sortMainField, sortOptions, selectBlock].forEach((elem) => {
      if (elem) elem.classList.toggle('active');
    });
    if (sortMainField && e.target instanceof HTMLDivElement) {
      sortMainField.textContent = e.target.textContent;
    }
  }
}

//TODO: add search support for enter key press
export default Settings;
