import { Page } from './base';

class Router {
  private static routeMap: Record<string, Page>;
  private static defaultRoute: Page;

  static addRoute(path: string, page: Page) {
    Router.routeMap[path] = page;
  }

  static startRouting(defaultRoute: Page) {
    Router.defaultRoute = defaultRoute;

    window.addEventListener('load', Router.resolveRoute);
    window.addEventListener('hashchange', Router.resolveRoute);
  }

  private static resolveRoute() {
    const page = Router.routeMap[location.hash.slice(1)] || Router.defaultRoute;
    page.draw();
  }
}

export default Router;
