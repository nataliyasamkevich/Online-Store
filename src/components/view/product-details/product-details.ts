import Page from '../../templates/page';

class ProductDetailsPage extends Page {
  static TextObject = {
    Title: 'Product Details Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const header = this.createTitle(ProductDetailsPage.TextObject.Title);
    this.container.append(header);
    return this.container;
  }
}

export default ProductDetailsPage;
