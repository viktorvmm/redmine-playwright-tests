class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'input[type="submit"]';
    this.errorMessage = '#flash_error';
    this.loggedInUser = '#loggedas';
  }

  async gotoHome() {
    await this.page.goto('https://www.redmine.org/');
  }

  async navigateToLoginPage() {
    await this.page.click('text=Sign in');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    // Wait for either success or error state
    await Promise.race([
      this.page.waitForSelector(this.loggedInUser, { state: 'visible' }),
      this.page.waitForSelector(this.errorMessage, { state: 'visible' })
    ]);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }

  async isLoggedIn() {
    return await this.page.isVisible(this.loggedInUser);
  }

  async getLoggedInUsername() {
    return await this.page.textContent(this.loggedInUser);
  }
}

module.exports = { LoginPage };

