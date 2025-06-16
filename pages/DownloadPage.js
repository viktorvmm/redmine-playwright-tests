const { expect } = require('@playwright/test');

class DownloadPage {
  constructor(page) {
    this.page = page;
    this.downloadLink = page.locator('a.download[href="/projects/redmine/wiki/Download"]');
    this.downloadPageHeader = page.locator('h1:has-text("Download")');
    this.downloadFileLinks = page.locator('tbody a[href*="/releases/redmine-"]');
  }

  async gotoHome() {
    await this.page.goto('https://www.redmine.org/');
  }

  async navigateToDownloadPage() {
    await this.downloadLink.click();
    await expect(this.downloadPageHeader).toBeVisible();
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');
  }

  async verifyDownloadLinks() {
    const expectedFiles = [
      '/releases/redmine-5.0.12.tar.gz',
      '/releases/redmine-5.0.12.zip',
      '/releases/redmine-5.1.8.tar.gz',
      '/releases/redmine-5.1.8.zip',
      '/releases/redmine-6.0.5.tar.gz',
      '/releases/redmine-6.0.5.zip'
    ];

    const links = await this.downloadFileLinks.all();
    await expect(links.length).toBe(expectedFiles.length);

    for (const link of links) {
      const href = await link.getAttribute('href');
      await expect(expectedFiles).toContain(href);
      const response = await this.page.request.get(`https://www.redmine.org${href}`);
      await expect(response.status()).toBe(200);
    }
  }
}

module.exports = { DownloadPage };