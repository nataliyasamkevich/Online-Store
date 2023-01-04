import * as noUiSlider from 'nouislider';
import itemsInfo from '../data/items-info';

class Filters {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    this.container.append(
      this.createCategories(),
      this.createPrice(),
      this.createBrands(),
      this.createInStock(),
      this.createButtons()
    );
  }

  private createCategories(): HTMLElement {
    //TODO: refactor using Set() as for brands

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

  private createPrice(): HTMLElement {
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('filters__price', 'price');

    const priceTitle = document.createElement('div');
    priceTitle.classList.add('filters-title', 'price__title');
    priceTitle.textContent = 'Price';

    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('slider-wrapper');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const valuesContainer = document.createElement('div');
    valuesContainer.classList.add('slider__values');

    const label1 = document.createElement('label');
    label1.classList.add('input-wrapper', 'slider__label');

    const value1 = document.createElement('input');
    value1.classList.add('values__value', 'value-0');
    value1.type = 'number';
    value1.min = '0';
    value1.max = '400';
    value1.value = value1.min;
    value1.disabled = true;

    const label2 = document.createElement('label');
    label2.classList.add('input-wrapper', 'slider__label');

    const value2 = document.createElement('input');
    value2.classList.add('values__value', 'value-1');
    value2.textContent = '400';
    value2.type = 'number';
    value2.min = '0';
    value2.max = '400';
    value2.value = value2.max;
    value2.disabled = true;

    const inputValues = [value1, value2];

    const priceSlider = noUiSlider.create(sliderContainer, {
      start: [0, 500],
      connect: true,
      step: 5,
      range: {
        min: 0,
        max: 400,
      },
    });
    // TODO: define min and max values from model

    priceSlider.on('update', (values: (string | number)[], handle: number) => {
      inputValues[handle].value = `${Math.round(+values[handle])}`;
    });

    label1.append(value1);
    label2.append(value2);
    valuesContainer.append(label1, label2);
    sliderWrapper.append(sliderContainer, valuesContainer);
    priceContainer.append(priceTitle, sliderWrapper);

    return priceContainer;
  }

  private createBrands(): HTMLElement {
    //TODO: adjuct brands for all available via the model
    const brandsList = new Set(itemsInfo.map((obj) => obj.brand));

    const brandsContainer = document.createElement('div');
    brandsContainer.classList.add('filters__brands', 'brands');

    const brandsTitle = document.createElement('div');
    brandsTitle.classList.add('filters-title', 'brands__title');
    brandsTitle.textContent = 'Brands';

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('brands__options');

    const createList = (list: Set<string>) => {
      list.forEach((brand: string): void => {
        const label = document.createElement('label');
        label.classList.add('brands__label');
        label.textContent = `${brand}`;

        const input = document.createElement('input');
        input.type = 'checkbox';

        const checkmark = document.createElement('span');
        checkmark.classList.add('brands__checkmark');

        label.append(input, checkmark);

        optionsContainer.append(label);
      });
    };

    createList(brandsList);
    brandsContainer.append(brandsTitle, optionsContainer);

    return brandsContainer;
  }

  private createInStock(): HTMLElement {
    const stockContainer = document.createElement('div');
    stockContainer.classList.add('filters__stock', 'stock');

    const stockTitle = document.createElement('div');
    stockTitle.classList.add('filters-title', 'stock__title');
    stockTitle.textContent = 'In stock';

    const sliderWrapper = document.createElement('div');
    sliderWrapper.classList.add('slider-wrapper');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');

    const valuesContainer = document.createElement('div');
    valuesContainer.classList.add('slider__values');

    const label1 = document.createElement('label');
    label1.classList.add('input-wrapper', 'slider__label');

    const value1 = document.createElement('input');
    value1.classList.add('values__value', 'value-0');
    value1.type = 'number';
    value1.min = '0';
    value1.max = '20';
    value1.value = value1.min;
    value1.disabled = true;

    const label2 = document.createElement('label');
    label2.classList.add('input-wrapper', 'slider__label');

    const value2 = document.createElement('input');
    value2.classList.add('values__value', 'value-1');
    value2.textContent = '20';
    value2.type = 'number';
    value2.min = '0';
    value2.max = '20';
    value2.value = value2.max;
    value2.disabled = true;

    const inputValues = [value1, value2];

    const stockSlider = noUiSlider.create(sliderContainer, {
      start: [0, 20],
      connect: true,
      step: 1,
      range: {
        min: 0,
        max: 20,
      },
    });
    // TODO: define min and max values from model

    stockSlider.on('update', (values: (string | number)[], handle: number) => {
      inputValues[handle].value = `${Math.round(+values[handle])}`;
    });

    label1.append(value1);
    label2.append(value2);
    valuesContainer.append(label1, label2);
    sliderWrapper.append(sliderContainer, valuesContainer);
    stockContainer.append(stockTitle, sliderWrapper);

    return stockContainer;
  }

  private createButtons(): HTMLElement {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const buttonReset = document.createElement('div');
    buttonReset.classList.add('button', 'filters__button');
    buttonReset.id = 'reset';
    buttonReset.textContent = 'Reset filters';

    const buttonCopy = document.createElement('div');
    buttonCopy.classList.add('button', 'filters__button');
    buttonCopy.id = 'copy';
    buttonCopy.textContent = 'Copy link';

    buttonsContainer.append(buttonReset, buttonCopy);

    return buttonsContainer;
  }
}

export default Filters;
