import { EnglishmodulePage } from './app.po';

describe('englishmodule App', function() {
  let page: EnglishmodulePage;

  beforeEach(() => {
    page = new EnglishmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
