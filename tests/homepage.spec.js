const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Redmine Homepage Tests', () => {
  test('Verify Homepage Loads Successfully', async ({ page }) => {
    const homePage = new HomePage(page);
    const response = await homePage.goto();
    
    
    await homePage.verifyHttpStatus(response);
    
   
    await homePage.verifyPageTitle();
    
    
    await homePage.verifyHomepageLoaded();
    
    
    await homePage.verifyNavigationElements();
  });
});