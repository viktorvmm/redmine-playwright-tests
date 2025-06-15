const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

test.describe('Redmine Search Functionality Tests', () => {
  test('Verify Search Functionality', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.gotoHome();
    await searchPage.verifySearchInputVisible();
    await searchPage.performSearch();
  });
});