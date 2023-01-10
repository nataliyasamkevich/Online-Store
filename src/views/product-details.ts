import { PerfumeСategory, ItemInfo } from '../base/base';
import { ModalView } from './modal';

class ProductDetails {
  constructor(protected container: HTMLElement, protected cardData: ItemInfo) {}

  createElement(): HTMLElement {
    const navigationLink = document.createElement('div');
    navigationLink.classList.add('navigation__link');

    const linkHome = document.createElement('a');
    linkHome.classList.add('link__breadcrumbs');
    linkHome.textContent = 'Home';
    // linkHome.href = '';

    const linkCategory = document.createElement('a');
    linkCategory.classList.add('link__breadcrumbs');
    linkCategory.textContent = `${this.cardData.category}`;

    const linkBrand = document.createElement('a');
    linkBrand.classList.add('link__breadcrumbs');
    linkBrand.textContent = `${this.cardData.brand}`;

    const linkName = document.createElement('a');
    linkName.classList.add('link__breadcrumbs');
    linkName.textContent = `${this.cardData.name}`;

    const productDetail = document.createElement('div');
    productDetail.classList.add('product__detail');

    const productGallery = document.createElement('div');
    productGallery.classList.add('product__gallery');

    const slides = document.createElement('div');
    slides.classList.add('slides');
    slides.innerHTML = `${this.cardData.images.reduce(
      (res, cur) => res + `<img class="slides__photo" src="${cur}">`,
      ''
    )}`;

    const grandPhoto = document.createElement('div');
    grandPhoto.classList.add('grand-photo');

    const grandPhotoActive = document.createElement('img');
    grandPhotoActive.classList.add('grand-photo__active');
    grandPhotoActive.src = `${this.cardData.thumbnail}`;

    const productDescription = document.createElement('div');
    productDescription.classList.add('product__description');

    const itemHeader = document.createElement('div');
    itemHeader.classList.add('item-header');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product__info');

    const productTitle = document.createElement('div');
    productTitle.classList.add('product__title');

    const productBrand = document.createElement('p');
    productBrand.classList.add('product__brand');
    productBrand.textContent = `${this.cardData.brand}`;

    const productName = document.createElement('p');
    productName.classList.add('product__name');
    productName.textContent = `${this.cardData.name}`;

    const productDetails = document.createElement('div');
    productDetails.classList.add('product__details');

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = `${this.cardData.price}  €`;

    const productVolume = document.createElement('p');
    productVolume.classList.add('product__volume');
    productVolume.textContent = `${this.cardData.volume} ml`;

    const productCategory = document.createElement('div');
    productCategory.classList.add('product__category');

    const categoryOptionEDP = document.createElement('div');
    categoryOptionEDP.classList.add('category__option');
    categoryOptionEDP.textContent = 'EDP';

    const categoryOptionEDT = document.createElement('div');
    categoryOptionEDT.classList.add('category__option');
    categoryOptionEDT.textContent = 'EDT';

    const categoryOptionEDC = document.createElement('div');
    categoryOptionEDC.classList.add('category__option');
    categoryOptionEDC.textContent = 'EDC';

    const categoryOptionEP = document.createElement('div');
    categoryOptionEP.classList.add('category__option');
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

    const productStock = document.createElement('p');
    productStock.classList.add('product__stock');
    productStock.textContent = `In stock: ${this.cardData.stock}`;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const buttonAddToBag = document.createElement('button');
    buttonAddToBag.classList.add(
      'button',
      'button__dark',
      'button__add-to-bag'
    );
    buttonAddToBag.textContent = 'Add to bag';

    const buttonBuyNow = document.createElement('button');
    buttonBuyNow.classList.add('button', 'button__buy-now');
    buttonBuyNow.textContent = 'Buy now';

    const about = document.createElement('div');
    about.classList.add('about');

    const aboutTitle = document.createElement('h2');
    aboutTitle.classList.add('about__title');
    aboutTitle.textContent = 'About the perfume';

    const aboutText = document.createElement('p');
    aboutText.classList.add('about__text');
    aboutText.textContent = `${this.cardData.description}`;

    navigationLink.append(
      linkHome,
      '/',
      linkCategory,
      '/',
      linkBrand,
      '/',
      linkName
    );
    productDetail.append(productGallery, productDescription);
    productGallery.append(slides, grandPhoto);
    grandPhoto.append(grandPhotoActive);
    productDescription.append(itemHeader, buttons, about);
    itemHeader.append(productInfo, productCategory, productStock);

    productInfo.append(productTitle, productDetails);
    productTitle.append(productBrand, productName);
    productDetails.append(productPrice, productVolume);

    productCategory.append(
      categoryOptionEDP,
      categoryOptionEDT,
      categoryOptionEDC,
      categoryOptionEP
    );

    buttons.append(buttonAddToBag, buttonBuyNow);
    about.append(aboutTitle, aboutText);

    this.container.append(navigationLink, productDetail);

    this.changeSlides();
    this.changeButton();
    this.buyProduct();

    return this.container;
  }

  private changeButton(): void {
    const buttonAddToBag = document.querySelector('.button__add-to-bag');
    buttonAddToBag?.addEventListener('click', () => {
      if (!buttonAddToBag) throw new Error(`Error`);
      buttonAddToBag.textContent = 'Drop from cart';
    });
  }

  private buyProduct(): void {
    const popup = document.querySelector('.popup') as HTMLElement;
    const buttonBuyNow = document.querySelector('.button__buy-now');
    buttonBuyNow?.addEventListener('click', () => {
      if (!buttonBuyNow) throw new Error(`Error`);
      return new ModalView(popup);
    });
  }

  private changeSlides(): void {
    document.querySelectorAll('.slides__photo').forEach((item) => {
      item.addEventListener('click', (e) => {
        const { target } = e;
        const grandPhoto = <HTMLImageElement>(
          document.querySelector('.grand-photo__active')
        );
        if (target instanceof HTMLImageElement) {
          grandPhoto.src = target.src;
        }
      });
    });
  }
}

export default ProductDetails;
