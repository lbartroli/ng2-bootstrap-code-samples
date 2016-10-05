import { IgPage } from './app.po';

describe('ig App', function() {
  let page: IgPage;

  beforeEach(() => {
    page = new IgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
