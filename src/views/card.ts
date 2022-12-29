import { ItemInfo } from '../base/base';

class Card {
  constructor(protected cardData: ItemInfo) {}

  getElement(): HTMLElement {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card__image');
    cardImageContainer.style.background = `url('${this.cardData.thumbnail}') no-repeat center`;
    cardImageContainer.style.backgroundSize = 'contain';

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card__info');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');

    const brand = document.createElement('div');
    brand.classList.add('card__brand');
    brand.textContent = `${this.cardData.brand}`;

    const name = document.createElement('div');
    name.classList.add('card__name');
    name.textContent = `${this.cardData.name}`;

    const cardOptions = document.createElement('div');
    cardOptions.classList.add('card__options');

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card__details');

    const volume = document.createElement('div');
    volume.classList.add('card__volume');
    volume.textContent = `${this.cardData.volume} ml`;

    const price = document.createElement('div');
    price.classList.add('card__price');
    price.textContent = `${this.cardData.price} €`;

    const button = document.createElement('div');
    button.classList.add('button', 'card__button');
    button.textContent = 'Add to bag';

    cardTitle.append(brand, name);
    cardDetails.append(volume, price);
    cardOptions.append(cardDetails, button);
    cardInfo.append(cardTitle, cardOptions);

    cardContainer.append(cardImageContainer, cardInfo);

    return cardContainer;
  }
}

export default Card;
