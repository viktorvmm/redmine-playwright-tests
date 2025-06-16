const { expect } = require('@playwright/test');

class HttpStatusChecker {
  static async verifyStatus(response, expectedStatus = 200) {
    expect(response.status()).toBe(expectedStatus);
  }

  static async verifySuccess(response) {
    await this.verifyStatus(response, 200);
  }

  static async verifyNotFound(response) {
    await this.verifyStatus(response, 404);
  }

  static async verifyServerError(response) {
    await this.verifyStatus(response, 500);
  }
}

module.exports = HttpStatusChecker; 