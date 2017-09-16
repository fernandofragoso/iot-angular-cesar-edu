import { SampleangularPage } from './app.po';

describe('sampleangular App', () => {
  let page: SampleangularPage;

  beforeEach(() => {
    page = new SampleangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
