const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pages');

test.describe('Redmine Homepage Tests', () => {
  test('Verify Homepage Loads Successfully', async ({ homePage }) => {
    await homePage.goto();
    await homePage.verifyPageTitle();
    await homePage.verifyHomepageLoaded();
  });
});