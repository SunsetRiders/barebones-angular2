import { BarebonesAngular2Page } from './app.po';

describe('barebones-angular2 App', () => {
  let page: BarebonesAngular2Page;

  beforeEach(() => {
    page = new BarebonesAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
