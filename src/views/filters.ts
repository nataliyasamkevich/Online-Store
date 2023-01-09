import * as noUiSlider from 'nouislider';
import FiltersController from '../controllers/filters';

class FiltersView {
  private controller: FiltersController;

  constructor(protected container: HTMLElement) {
    this.controller = new FiltersController();
    this.draw();
    this.setHandlers();
  }

  draw(): void {
    this.container.innerHTML = '';

    this.container.append(
      this.createCategories(),
      this.createPrice(),
      this.createBrands(),
      this.createInStock(),
      this.createButtons()
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

    const categoriesList = this.controller.getCategories();
    const activeCategories = this.controller.getActiveFilterCategories();

    const createList = (list: string[]) => {
      list.forEach((category: string): void => {
        const label = document.createElement('label');
        label.classList.add('categoties__label');
        label.textContent = `${category}`;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.dataset.category = category;

        input.checked = activeCategories.includes(category);

        input.addEventListener('change', () =>
          this.controller.handleCategories(
            input.checked,
            input.dataset.category
          )
        );

        const checkmark = document.createElement('span');
        checkmark.classList.add('categoties__checkmark');

        label.append(input, checkmark);

        optionsContainer.append(label);
      });
    };

    createList(categoriesList);

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

    const [minPrice, maxPrice] = this.controller.getPriceRange();
    const [activeMinPrice, activeMaxPrice] =
      this.controller.getActivePriceRange();

    const label1 = document.createElement('label');
    label1.classList.add('input-wrapper', 'slider__label');

    const value1 = document.createElement('input');
    value1.classList.add('values__value', 'value-0');
    value1.textContent = `${activeMinPrice}`;
    value1.type = 'number';
    value1.min = `${minPrice}`;
    value1.max = `${maxPrice}`;
    value1.value = `${activeMinPrice}`;
    value1.disabled = true;

    const label2 = document.createElement('label');
    label2.classList.add('input-wrapper', 'slider__label');

    const value2 = document.createElement('input');
    value2.classList.add('values__value', 'value-1');
    value2.textContent = `${activeMaxPrice}`;
    value2.type = 'number';
    value2.min = `${minPrice}`;
    value2.max = `${maxPrice}`;
    value2.value = `${activeMaxPrice}`;
    value2.disabled = true;

    const inputValues = [value1, value2];

    const priceSlider = noUiSlider.create(sliderContainer, {
      start: [activeMinPrice, activeMaxPrice],
      connect: true,
      step: 5,
      range: {
        min: minPrice,
        max: maxPrice,
      },
    });

    priceSlider.on('update', (values: (string | number)[], handle: number) => {
      inputValues[handle].value = `${Math.round(+values[handle])}`;
    });

    priceSlider.on('set', () =>
      this.controller.handlePrices(inputValues[0].value, inputValues[1].value)
    );

    label1.append(value1);
    label2.append(value2);
    valuesContainer.append(label1, label2);
    sliderWrapper.append(sliderContainer, valuesContainer);
    priceContainer.append(priceTitle, sliderWrapper);

    return priceContainer;
  }

  private createBrands(): HTMLElement {
    const brandsContainer = document.createElement('div');
    brandsContainer.classList.add('filters__brands', 'brands');

    const brandsTitle = document.createElement('div');
    brandsTitle.classList.add('filters-title', 'brands__title');
    brandsTitle.textContent = 'Brands';

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('brands__options');

    const brandsList = this.controller.getBrands();
    const activeBrands = this.controller.getActiveFilterBrands();

    const createList = (list: string[]) => {
      list.forEach((brand: string): void => {
        const label = document.createElement('label');
        label.classList.add('brands__label');
        label.textContent = `${brand}`;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.dataset.brand = brand;

        input.checked = activeBrands.includes(brand);

        input.addEventListener('change', () =>
          this.controller.handleBrands(input.checked, input.dataset.brand)
        );

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

    const [minAmount, maxAmount] = this.controller.getStockRange();
    const [activeMinAmount, activeMaxAmount] =
      this.controller.getActiveStockRange();

    const label1 = document.createElement('label');
    label1.classList.add('input-wrapper', 'slider__label');

    const value1 = document.createElement('input');
    value1.classList.add('values__value', 'value-0');
    value1.textContent = `${activeMinAmount}`;
    value1.type = 'number';
    value1.min = `${minAmount}`;
    value1.max = `${maxAmount}`;
    value1.value = `${activeMinAmount}`;
    value1.disabled = true;

    const label2 = document.createElement('label');
    label2.classList.add('input-wrapper', 'slider__label');

    const value2 = document.createElement('input');
    value2.classList.add('values__value', 'value-1');
    value2.textContent = `${activeMaxAmount}`;
    value2.type = 'number';
    value2.min = `${minAmount}`;
    value2.max = `${maxAmount}`;
    value2.value = `${activeMaxAmount}`;
    value2.disabled = true;

    const inputValues = [value1, value2];

    const stockSlider = noUiSlider.create(sliderContainer, {
      start: [activeMinAmount, activeMaxAmount],
      connect: true,
      step: 1,
      range: {
        min: minAmount,
        max: maxAmount,
      },
    });

    stockSlider.on('update', (values: (string | number)[], handle: number) => {
      inputValues[handle].value = `${Math.round(+values[handle])}`;
    });

    stockSlider.on('set', () =>
      this.controller.handleStock(inputValues[0].value, inputValues[1].value)
    );

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

    buttonReset.addEventListener('click', () => this.controller.resetFilters());

    const buttonCopy = document.createElement('div');
    buttonCopy.classList.add('button', 'filters__button');
    buttonCopy.id = 'copy';
    buttonCopy.textContent = 'Copy link';

    buttonCopy.addEventListener('click', () => {
      this.controller.copyLink;
      buttonCopy.textContent = 'Link copied!';
      buttonCopy.classList.add('temp');
      setTimeout(() => {
        buttonCopy.textContent = 'Copy link';
        buttonCopy.classList.remove('temp');
      }, 2000);
    });

    buttonsContainer.append(buttonReset, buttonCopy);

    return buttonsContainer;
  }

  private setHandlers() {
    window.addEventListener('popstate', () => this.draw());
  }
}

export default FiltersView;
