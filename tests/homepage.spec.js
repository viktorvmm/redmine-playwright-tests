const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Redmine Homepage Tests', () => {
  test('Verify Homepage Loads Successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const response = await homePage.goto();
    
    // Verify HTTP status
    await homePage.verifyHttpStatus(response);
    
    // Verify page title
    await homePage.verifyPageTitle();
    
    // Verify homepage content
    await homePage.verifyHomepageLoaded();
    
    // Verify navigation elements
    await homePage.verifyNavigationElements();
  });
});