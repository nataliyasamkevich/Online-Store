class Filters {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    this.container.append(
      this.createCategories()
      // this.createPrice(),
      // this.createBrands(),
      // this.createInStock(),
      // this.createButtons()
    );
  }

  private createCategories(): HTMLElement {
    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('filters__categories', 'categories');

    const categoriesTitle = document.createElement('div');
    categoriesTitle.classList.add('filters-title', 'categories__title');
    categoriesTitle.textContent = 'Categories';

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('categories__options');

    const labelEDP = document.createElement('label');
    labelEDP.classList.add('categoties__label');
    labelEDP.textContent = 'Eau de parfum (EDP)';

    const inputEDP = document.createElement('input');
    inputEDP.type = 'checkbox';

    const checkmarkEDP = document.createElement('span');
    checkmarkEDP.classList.add('categoties__checkmark');

    const labelEDT = document.createElement('label');
    labelEDT.classList.add('categoties__label');
    labelEDT.textContent = 'Eau de toilette (EDT)';

    const inputEDT = document.createElement('input');
    inputEDT.type = 'checkbox';

    const checkmarkEDT = document.createElement('span');
    checkmarkEDT.classList.add('categoties__checkmark');

    const labelEDC = document.createElement('label');
    labelEDC.classList.add('categoties__label');
    labelEDC.textContent = 'Eau de cologne (EDC)';

    const inputEDC = document.createElement('input');
    inputEDC.type = 'checkbox';

    const checkmarkEDC = document.createElement('span');
    checkmarkEDC.classList.add('categoties__checkmark');

    const labelEP = document.createElement('label');
    labelEP.classList.add('categoties__label');
    labelEP.textContent = 'Extrait de parfum (EP)';

    const inputEP = document.createElement('input');
    inputEP.type = 'checkbox';

    const checkmarkEP = document.createElement('span');
    checkmarkEP.classList.add('categoties__checkmark');

    labelEDP.append(inputEDP, checkmarkEDP);
    labelEDT.append(inputEDT, checkmarkEDT);
    labelEDC.append(inputEDC, checkmarkEDC);
    labelEP.append(inputEP, checkmarkEP);

    optionsContainer.append(labelEDP, labelEDT, labelEDC, labelEP);
    categoriesContainer.append(categoriesTitle, optionsContainer);

    return categoriesContainer;
  }

  // private createPrice(): HTMLElement {}

  // private createBrands(): HTMLElement {}

  // private createInStock(): HTMLElement {}

  // private createButtons(): HTMLElement {}
}

export default Filters;
