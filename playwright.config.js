const { devices } = require('@playwright/test');

module.exports = {
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['line'],
    ['allure-playwright'],
  ],
  use: {
    baseURL: 'https://www.redmine.org/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
};