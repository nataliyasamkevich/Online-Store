import Page from './components/templates/page';
import MainPage from './components/view/main/main';
import CardPage from './components/view/card/card';
import ProductDetailsPage from './components/view/product-details/product-details';
import Header from './components/view/header/header';
import ErrorPage, { ErrorTypes } from './components/view/error/error';
import Router from './base/router';

export const enum PageIds {
  MainPage = '',
  CardPage = 'card',
  ProductDetailsPage = 'product-details',
}

class App {
  private static container: HTMLElement;

  static run(container: HTMLElement): void {
    App.container = container;

    App.createLayout();
    App.setupRouter();
  }

  private static createLayout() {
    const headerContainer = App.container.querySelector(
      'header'
    ) as HTMLElement;
    const footerContainer = App.container.querySelector('footer');

    const header = new Header(headerContainer);
  }

  private static setupRouter() {
    const mainContainer = App.container.querySelector('main');

    const catalog = new Catalog(mainContainer);
    Router.addRoute('', catalog);
    const product = new Product(mainContainer);
    Router.addRoute('product', product);
    const cart = new Cart(mainContainer);
    Router.addRoute('cart', cart);

    const notFound = new NotFound(mainContainer);
    Router.startRouting(notFound);
  }
  // private static container = document.body;
  // private static defaultPageId = 'current-page';
  // // private header: Header;

  // static renderNewPage(idPage: string) {
  //   const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
  //   if (currentPageHTML) {
  //     currentPageHTML.remove();
  //   }
  //   let page: Page | null = null;

  //   if (idPage === PageIds.MainPage) {
  //     page = new MainPage(idPage);
  //   } else if (idPage === PageIds.CardPage) {
  //     page = new CardPage(idPage);
  //   } else if (idPage === PageIds.ProductDetailsPage) {
  //     page = new ProductDetailsPage(idPage);
  //   } else {
  //     page = new ErrorPage(idPage, ErrorTypes.Error_404);
  //   }

  //   if (page) {
  //     const pageHTML = page.render();
  //     pageHTML.id = App.defaultPageId;
  //     App.container.append(pageHTML);
  //   }
  // }

  // private enableRouteChange() {
  //   window.addEventListener('hashchange', () => {
  //     const hash = window.location.hash.slice(1);
  //     App.renderNewPage(hash);
  //   });
  // }

  // constructor() {
  //   // this.header = new Header('header', 'header');
  // }

  // run() {
  //   // App.container.append(this.header.render());
  //   App.renderNewPage('');
  //   this.enableRouteChange();
  // }
}

export default App;
