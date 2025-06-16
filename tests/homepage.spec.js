const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pages');
const HttpStatusChecker = require('../utils/HttpStatusChecker');

test.describe('Redmine Homepage Tests', () => {
  test('Verify Homepage Loads Successfully', async ({ homePage }) => {
    const response = await homePage.goto();
    await HttpStatusChecker.verifySuccess(response);
    await homePage.verifyPageTitle();
    await homePage.verifyHomepageLoaded();
  });
});