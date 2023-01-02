import CardPage from './views/card';
import Header from './views/header';
import Footer from './views/footer';
import Router from './base/router';
import MainPage from './views/mainpage';

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
    const mainContainer = App.container.querySelector('main') as HTMLElement;
    const footerContainer = App.container.querySelector(
      'footer'
    ) as HTMLElement;
    const header = new Header(headerContainer, 0, 0);
    const footer = new Footer(footerContainer);
    const main = new MainPage(mainContainer);
  }

  private static setupRouter() {
    const mainContainer = App.container.querySelector('main') as HTMLElement;

    // const catalog = new Catalog(mainContainer);
    // Router.addRoute('', catalog);
    // const product = new Product(mainContainer);
    // Router.addRoute('product', product);
    // const cart = new Cart(mainContainer);
    // Router.addRoute('cart', cart);

    //  const notFound = new NotFound(mainContainer);
    // Router.startRouting(catalog);
  }
}

export default App;
