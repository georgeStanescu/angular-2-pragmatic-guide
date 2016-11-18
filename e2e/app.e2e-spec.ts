import { Ng2PragmaticGuidePage } from './app.po';

describe('ng2-pragmatic-guide App', function() {
  let page: Ng2PragmaticGuidePage;

  beforeEach(() => {
    page = new Ng2PragmaticGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
