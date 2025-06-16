const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pages');

test.describe('Redmine Login Tests', () => {
  test('Login page elements are present', async ({ loginPage, page }) => {
    await loginPage.gotoHome();
    await loginPage.navigateToLoginPage();
    
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('input[type="submit"]')).toBeVisible();
  });

  test('Failed login with invalid credentials', async ({ loginPage, page }) => {
    await loginPage.gotoHome();
    await loginPage.navigateToLoginPage();
    await loginPage.login('invalid_user', 'invalid_password');
    
    await page.waitForSelector('#flash_error', { state: 'visible' });
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid user or password');
  });

  test('Login form validation', async ({ loginPage, page }) => {
    await loginPage.gotoHome();
    await loginPage.navigateToLoginPage();
    
    await page.click('input[type="submit"]');
    
    await page.waitForSelector('#flash_error', { state: 'visible' });
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Invalid user or password');
  });
});

