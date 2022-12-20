import Component from '../../../templates/components';
import { PageIds } from '../../../app/app';

const Buttons = [
  {
    id: PageIds.MainPage,
    text: 'Online Store',
  },
  {
    id: PageIds.CardPage,
    text: 'Card Page',
  },
  {
    id: PageIds.ProductDetailsPage,
    text: 'ProductDetails Page',
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPage() {
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      this.container.append(buttonHTML);
    });
  }

  render() {
    this.renderPage();
    return this.container;
  }
}

export default Header;
