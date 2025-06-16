const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.projectTitle = page.locator('span.current-project');
    this.navigationElements = {
      home: page.locator('a.home'),
      projects: page.locator('a.projects'),
      help: page.locator('a.help'),
      signIn: page.locator('a.login'),
      register: page.locator('a.register')
    };
  }

  async goto() {
    return await this.page.goto('https://www.redmine.org/');
  }

  async verifyHomepageLoaded() {
    await expect(this.projectTitle).toHaveText('Redmine');
  }

  async verifyPageTitle() {
    const title = await this.page.title();
    expect(title).toContain('Redmine');
  }
}

module.exports = { HomePage };