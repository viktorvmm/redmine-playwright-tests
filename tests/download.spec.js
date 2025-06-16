const { test, expect } = require('@playwright/test');
const DownloadPage = require('../pages/DownloadPage');

test.describe('Redmine Download Page Tests', () => {
  test('Verify Navigation to Download Page and Download Links', async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.gotoHome();
    await downloadPage.navigateToDownloadPage();
    await downloadPage.verifyDownloadLinks();
  });
});