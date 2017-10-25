import { PadocareAngularPage } from './app.po';

describe('padocare-angular App', () => {
  let page: PadocareAngularPage;

  beforeEach(() => {
    page = new PadocareAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
