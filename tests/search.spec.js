const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pages');

test.describe('Redmine Search Functionality Tests', () => {
  test('Verify Search Functionality', async ({ searchPage }) => {
    await searchPage.gotoHome();
    await searchPage.verifySearchInputVisible();
    await searchPage.performSearch();
  });
});