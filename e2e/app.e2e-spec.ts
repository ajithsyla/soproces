import { SoprocessPage } from './app.po';

describe('soprocess App', () => {
  let page: SoprocessPage;

  beforeEach(() => {
    page = new SoprocessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
