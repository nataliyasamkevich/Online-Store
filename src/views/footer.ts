class FooterView {
  constructor(protected container: HTMLElement) {
    this.draw();
  }

  draw(): void {
    this.container.innerHTML = '';

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('footer__wrapper');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('footer__content-wrapper');

    const rssContainer = document.createElement('div');
    rssContainer.classList.add('footer__rss', 'rss');

    const yearContainer = document.createElement('div');
    yearContainer.classList.add('footer__year', 'year');

    const githubContainer = document.createElement('div');
    githubContainer.classList.add('footer__github', 'github');

    const rssMade = document.createElement('span');
    rssMade.textContent = 'made with ❤️ at ';

    const rssLink = document.createElement('a');
    rssLink.classList.add('footer__link');
    rssLink.href = 'https://rs.school';
    rssLink.textContent = 'Rolling Scopes School';
    rssLink.target = '_blank';

    const year = document.createElement('span');
    year.textContent = `${new Date().getFullYear()}`;

    const seeProject = document.createElement('span');
    seeProject.textContent = 'see the project at ';

    const githubLink = document.createElement('a');
    githubLink.classList.add('footer__link');
    githubLink.href = 'https://github.com/nataliyasamkevich/Online-Store';
    githubLink.textContent = 'Github';
    githubLink.target = '_blank';

    rssContainer.append(rssMade, rssLink);
    yearContainer.append(year);
    githubContainer.append(seeProject, githubLink);
    contentWrapper.append(rssContainer, yearContainer, githubContainer);
    footerWrapper.append(contentWrapper);

    this.container.append(footerWrapper);
  }
}

export default FooterView;
