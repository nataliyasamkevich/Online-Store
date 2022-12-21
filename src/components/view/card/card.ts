import Page from '../../templates/page';

class CardPage extends Page {
  static TextObject = {
    Title: 'Card Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const header = this.createTitle(CardPage.TextObject.Title);
    this.container.append(header);
    return this.container;
  }
};

export default CardPage;
