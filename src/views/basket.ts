import { PerfumeСategory, ItemInfo } from '../base/base';

class Basket {
  constructor(
    protected container: HTMLElement,
    protected cardData: ItemInfo
  ) {
  }

  createElement(): HTMLElement {

    const cartWrapper = document.createElement('div');
    cartWrapper.classList.add('cart__wrapper');

    const cartInProducts = document.createElement('div');
    cartInProducts.classList.add('products-in__cart');

    const cartTotal = document.createElement('div');
    cartTotal.classList.add('total__cart');

    const bagTitle = document.createElement('h2');
    bagTitle.classList.add('title');
    bagTitle.textContent = 'Product details';

    const productsList = document.createElement('div');
    productsList.classList.add('products__list');

    const settingsHeader = document.createElement('div');
    settingsHeader.classList.add('settings-view');

    const settingsHeaderItemsPage = document.createElement('div');
    settingsHeaderItemsPage.classList.add('settings-view__container');

    const settingsTitle = document.createElement('h2');
    settingsTitle.classList.add('title');
    settingsTitle.textContent = 'Items per page:';

    const settingsCounter = document.createElement('div');
    settingsCounter.classList.add('amount__option');
    settingsCounter.textContent = '10';

    const settingsHeaderPage = document.createElement('div');
    settingsHeaderPage.classList.add('settings-view__container');

    const pageTitle = document.createElement('h2');
    pageTitle.classList.add('title');
    pageTitle.textContent = 'Page';

    const pageCounterContainer = document.createElement('div');
    pageCounterContainer.classList.add('page__counter');

    const pageCounterLeft = document.createElement('div');
    pageCounterLeft.classList.add('amount__option', 'amount__option_left');
    pageCounterLeft.textContent = '<';

    const pageCounterCenter = document.createElement('div');
    pageCounterCenter.classList.add('amount__option', 'amount__option_value');
    pageCounterCenter.textContent = '1';

    const pageCounterRight = document.createElement('div');
    pageCounterRight.classList.add('amount__option', 'amount__option_right');
    pageCounterRight.textContent = '>';


    const paymentInfo = document.createElement('div');
    paymentInfo.classList.add('payment-info');

    const paymentInfoTitle = document.createElement('h2');
    paymentInfoTitle.classList.add('title', 'payment-info__title');
    paymentInfoTitle.textContent = 'Summary';

    const paymentInfoProductsAmount = document.createElement('div');
    paymentInfoProductsAmount.classList.add('payment-info__container');

    const productsAmount = document.createElement('p');
    productsAmount.classList.add('payment-info__text');
    productsAmount.textContent = 'Products in your bag:';

    const productsAmountCount = document.createElement('p');
    productsAmountCount.classList.add('payment-info__text');
    productsAmountCount.textContent = '0';

    const paymentInfoSubtotal = document.createElement('div');
    paymentInfoSubtotal.classList.add('payment-info__container');

    const subtotal = document.createElement('p');
    subtotal.classList.add('payment-info__text');
    subtotal.textContent = 'Subtotal:';

    const subtotalCount = document.createElement('p');
    subtotalCount.classList.add('payment-info__text');
    subtotalCount.textContent = '0.00 €';

    const paymentInfoPromo = document.createElement('div');
    paymentInfoPromo.classList.add('payment-info__container');

    const promo = document.createElement('p');
    promo.classList.add('payment-info__text');
    promo.textContent = 'Promo discount:';

    const promoCount = document.createElement('p');
    promoCount.classList.add('payment-info__text');
    promoCount.textContent = '0.00 €';

    const paymentInfoTotal = document.createElement('div');
    paymentInfoTotal.classList.add('payment-info__container');

    const total = document.createElement('p');
    total.classList.add('payment-info__text');
    total.textContent = 'Total:';

    const totalCount = document.createElement('p');
    totalCount.classList.add('payment-info__text');
    totalCount.textContent = '0.00 €';

    const promoCodeArea = document.createElement('div');
    promoCodeArea.classList.add('promo-code__container');

    const promoCodeText = document.createElement('p');
    promoCodeText.classList.add('promo-code__text');
    promoCodeText.innerHTML = `Got a <span>promocode</span>? Insert it here`;

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input__container');

    const searchFieldInput = document.createElement('input');
    searchFieldInput.classList.add('search-field__input', 'input');
    searchFieldInput.type = 'search';

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox__container');


    const promoCodePromos = document.createElement('p');
    promoCodePromos.classList.add('promo-code__promos');
    promoCodePromos.innerHTML = `Use promos <span>NY2023</span> and <span>giftbox</span> to get -10% off for your holiday gifts!`;


    const button = document.createElement('button');
    button.classList.add('button', 'button__dark');
    button.textContent = 'Proceed to payment';


    inputContainer.append(searchFieldInput, checkbox);
    promoCodeArea.append(promoCodeText, inputContainer, promoCodePromos, button);
    paymentInfoTotal.append(total, totalCount);
    paymentInfoPromo.append(promo, promoCount);
    paymentInfoSubtotal.append(subtotal, subtotalCount);
    paymentInfoProductsAmount.append(productsAmount, productsAmountCount);
    paymentInfo.append(paymentInfoTitle, paymentInfoProductsAmount, paymentInfoSubtotal, paymentInfoPromo, paymentInfoTotal, promoCodeArea);
    pageCounterContainer.append(pageCounterLeft, pageCounterCenter, pageCounterRight)
    settingsHeaderPage.append(pageTitle, pageCounterContainer);
    settingsHeaderItemsPage.append(settingsTitle, settingsCounter);
    settingsHeader.append(settingsHeaderItemsPage, settingsHeaderPage);
    cartTotal.append(settingsHeader, paymentInfo);
    productsList.append(this.createProductItem());
    cartInProducts.append(bagTitle, productsList);
    cartWrapper.append(cartInProducts, cartTotal);
    this.container.append(cartWrapper);

    return this.container;
  }

  createProductItem() {
    const productItem = document.createElement('div');
    productItem.classList.add('product__item');

    const itemNumber = document.createElement('div');
    itemNumber.classList.add('item__number');
    itemNumber.textContent = '1';

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item__description');

    const itemPhoto = document.createElement('img');
    itemPhoto.classList.add('item__photo');
    itemPhoto.src = `${this.cardData.thumbnail}`;

    const itemInform = document.createElement('div');
    itemInform.classList.add('item__info');

    const itemBrandName = document.createElement('p');
    itemBrandName.classList.add('item__brand-name');
    itemBrandName.textContent = `${this.cardData.brand}${this.cardData.name}`;

    const itemVolume = document.createElement('p');
    itemVolume.classList.add('item__volume');
    itemVolume.textContent = `${this.cardData.volume} ml`;

    const itemCategory = document.createElement('div');
    itemCategory.classList.add('item__category');

    const categoryOptionEDP = document.createElement('div');
    categoryOptionEDP.classList.add('category__option-small');
    categoryOptionEDP.textContent = 'EDP';

    const categoryOptionEDT = document.createElement('div');
    categoryOptionEDT.classList.add('category__option-small');
    categoryOptionEDT.textContent = 'EDT';

    const categoryOptionEDC = document.createElement('div');
    categoryOptionEDC.classList.add('category__option-small');
    categoryOptionEDC.textContent = 'EDC';

    const categoryOptionEP = document.createElement('div');
    categoryOptionEP.classList.add('category__option-small');
    categoryOptionEP.textContent = 'EP';

    switch (this.cardData.category) {
      case PerfumeСategory['EDP']:
        categoryOptionEDP.classList.add('category__option_active');
        break;
      case PerfumeСategory['EDT']:
        categoryOptionEDT.classList.add('category__option_active');
        break;
      case PerfumeСategory['EDC']:
        categoryOptionEDC.classList.add('category__option_active');
        break;
      case PerfumeСategory['EP']:
        categoryOptionEP.classList.add('category__option_active');
        break;
    }

    const itemStock = document.createElement('p');
    itemStock.classList.add('item__stock');
    itemStock.textContent = `In stock: ${this.cardData.stock}`;

    const itemCount = document.createElement('div');
    itemCount.classList.add('item__count');

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item__price');
    itemPrice.textContent = `${this.cardData.price} €`;

    const amountCount = document.createElement('div');
    amountCount.classList.add('amount__count');

    const amountOptionLeft = document.createElement('div');
    amountOptionLeft.classList.add('amount__option', 'amount__option_minus');
    amountOptionLeft.textContent = '-';

    const amountOptionСenter = document.createElement('div');
    amountOptionСenter.classList.add('amount__option', 'amount__option_value');
    amountOptionСenter.textContent = '2';

    const amountOptionRight = document.createElement('div');
    amountOptionRight.classList.add('amount__option', 'amount__option_plus');
    amountOptionRight.textContent = '+';

    const itemPriceResult = document.createElement('p');
    itemPriceResult.classList.add('item__price', 'item__price_result');
    itemPriceResult.textContent = `${this.cardData.price} €`;

    amountCount.append(amountOptionLeft, amountOptionСenter, amountOptionRight);
    itemCount.append(itemPrice, amountCount, itemPriceResult);
    itemCategory.append(categoryOptionEDP, categoryOptionEDT, categoryOptionEDC, categoryOptionEP);
    itemInform.append(itemBrandName, itemVolume, itemCategory, itemStock);
    itemDescription.append(itemPhoto, itemInform, itemCount);
    productItem.append(itemNumber, itemDescription);

    return productItem
  }
}

export default Basket;
