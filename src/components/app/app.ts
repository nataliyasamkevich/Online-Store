import Page from '../templates/page';
import MainPage from '../view/main/main';
import CardPage from '../view/card/card';
import ProductDetailsPage from '../view/product-details/product-details';
import Header from '../../components/view/components/header/index';
import ErrorPage, { ErrorTypes } from '../view/error/error';

export const enum PageIds {
  MainPage = '',
  CardPage = 'card',
  ProductDetailsPage = 'product-details',
}

class App {
  private static container = document.body;
  private static defaultPageId = 'current-page';
  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.CardPage) {
      page = new CardPage(idPage);
    } else if (idPage === PageIds.ProductDetailsPage) {
      page = new ProductDetailsPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.header = new Header('header', 'header');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('');
    this.enableRouteChange();
  }
}

export default App;
