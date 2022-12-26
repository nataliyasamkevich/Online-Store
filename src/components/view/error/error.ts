import Page from '../../templates/page';

export const enum ErrorTypes {
  Error_404 = 404,
}

class ErrorPage extends Page {
  private errorType: ErrorTypes | string;

  static TextObject: { [prop: string]: string } = {
    '404': 'PAGE NOT FOUND (404)',
  };

  constructor(id: string, errorType: ErrorTypes | string) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const header = this.createTitle(ErrorPage.TextObject[this.errorType]);
    this.container.append(header);
    return this.container;
  }
}

export default ErrorPage;
