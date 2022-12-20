import Page from '../../templates/page';

class MainPage extends Page {
  static TextObject = {
    Title: 'Main Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const header = this.createTitle(MainPage.TextObject.Title);
    this.container.append(header);
    return this.container;
  }
}

export default MainPage;
