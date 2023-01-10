class HeaderView {
  private sum = 0;
  private itemsAmount = 0;

  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    this.container.innerHTML = '';

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper');

    const logoWrapper = document.createElement('div');
    logoWrapper.classList.add('header__logo-wrapper');

    const logo = document.createElement('img');
    logo.classList.add('header__logo', 'logo');
    logo.src = './assets/svg/logo.svg';

    const cartBlock = document.createElement('div');
    cartBlock.classList.add('header__cart', 'cart');

    const cartSumBlock = document.createElement('div');
    cartSumBlock.classList.add('cart__sum-block', 'sum-block');

    const sumAmount = document.createElement('div');
    sumAmount.classList.add('sum-block__sum');
    sumAmount.textContent = `${this.sum}`;

    const sumCurrency = document.createElement('div');
    sumCurrency.classList.add('sum-block__currency');
    sumCurrency.textContent = '€';

    const cartButton = document.createElement('div');
    cartButton.classList.add('cart-button');
    cartButton.style.background =
      "url('./assets/svg/bag-empty.svg') no-repeat center";

    const cartAmount = document.createElement('div');
    cartAmount.classList.add('cart-button__amount');
    cartAmount.textContent = `${this.itemsAmount}`;
    //TODO: write condition to hide number if it's 0 by adding '.hidden' class or display it by removing the class
    cartAmount.classList.add('hidden');

    cartButton.append(cartAmount);
    cartSumBlock.append(sumAmount, sumCurrency);
    cartBlock.append(cartSumBlock, cartButton);
    logoWrapper.append(logo);
    headerWrapper.append(logoWrapper, cartBlock);

    this.container.append(headerWrapper);
  }
}

export default HeaderView;
