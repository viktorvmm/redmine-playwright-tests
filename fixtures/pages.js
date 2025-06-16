const { test: base } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { NewsPage } = require('../pages/NewsPage');
const { SearchPage } = require('../pages/SearchPage');
const { DownloadPage } = require('../pages/DownloadPage');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  newsPage: async ({ page }, use) => {
    await use(new NewsPage(page));
  },
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
  downloadPage: async ({ page }, use) => {
    await use(new DownloadPage(page));
  }
});

module.exports = { test }; 