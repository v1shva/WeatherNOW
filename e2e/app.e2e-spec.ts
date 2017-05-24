import { Assignment2ProjectPage } from './app.po';

describe('assignment2-project App', function() {
  let page: Assignment2ProjectPage;

  beforeEach(() => {
    page = new Assignment2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
