import * as utilities from './base/utilities';
import Router from './base/router';

import HeaderView from './views/header';
import FooterView from './views/footer';

import MainPageView from './views/main-page';

const enum PageIds {
  MainPage = '',
  CardPage = 'card',
  ProductDetailsPage = 'product-details',
}

class App {
  private static container: HTMLElement;
  private static headerContainer: HTMLElement;
  private static mainContainer: HTMLElement;
  private static footerContainer: HTMLElement;

  static run(container: HTMLElement): void {
    App.container = container;

    App.createLayout();
    App.setupRouter();
  }

  private static createLayout() {
    App.headerContainer = utilities.AddElementWithClasses(
      App.container,
      'header',
      ['header']
    );

    App.mainContainer = utilities.AddElementWithClasses(App.container, 'main', [
      'main',
    ]);

    App.footerContainer = utilities.AddElementWithClasses(
      App.container,
      'footer',
      ['footer']
    );

    new HeaderView(App.headerContainer);
    new FooterView(App.footerContainer);

    // const modalContainer = App.container.querySelector('.popup') as HTMLElement;
    // const main = new MainPage(mainContainer);
    // const modal = new ModalView(modalContainer);
  }

  private static setupRouter() {
    const mainPage = new MainPageView(App.mainContainer);
    Router.addRoute(PageIds.MainPage, mainPage);

    // const product = new Product(mainContainer);
    // Router.addRoute('product', product);
    // const cart = new Cart(mainContainer);
    // Router.addRoute('cart', cart);

    //  const notFound = new NotFound(mainContainer);
    Router.startRouting(mainPage);
  }
}

export default App;
