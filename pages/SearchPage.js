const { expect } = require('@playwright/test');

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input#q');
  }

  async gotoHome() {
    await this.page.goto('https://www.redmine.org/');
  }

  async verifySearchInputVisible() {
    await expect(this.searchInput).toBeVisible();
  }

  async performSearch() {
    const randomQuery = `test${Math.floor(Math.random() * 1000)}`;
    await this.searchInput.fill(randomQuery);
    await this.searchInput.press('Enter');
    
    await expect(this.page).toHaveURL(
      new RegExp(`https://www.redmine.org/projects/redmine/search\\?utf8=%E2%9C%93&scope=subprojects&wiki_pages=1&q=${randomQuery}`)
    );
    
    await expect(this.page.locator('body')).toBeVisible();
  }
}

module.exports = { SearchPage };