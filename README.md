# Redmine Test Automation Project

This project contains automated tests for the Redmine project management tool using Playwright.

## Project Structure

- `tests/` - Test specifications
- `pages/` - Page Object Models
- `fixtures/` - Test fixtures and shared test objects
- `utils/` - Utility classes and helper functions

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npx playwright test
```

3. View test report:
```bash
npx allure generate allure-results --clean && npx allure open allure-report
```

## Test Reports

Test reports are available in two formats:
1. Allure reports (generated after test execution)
2. GitHub Pages (automatically deployed from the `allure-report` directory)

## GitHub Pages

The test reports are automatically deployed to GitHub Pages. You can view them at:
https://[your-username].github.io/redmine-tests/

## Test Structure

The project follows the Page Object Model pattern with the following improvements:
- Fixtures for page objects to avoid direct instantiation in tests
- Separate HTTP status checking utility
- Clean separation of concerns between page objects and test logic

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

# QA Test Automation of Redmine using Playwright

## Project Description  
This is a training project focused on automating functional testing of the Redmine web application using Playwright. The goal is to practice writing automated tests, working with CI/CD (GitHub Actions), and generating reports (Allure).

---
- **Test Plan and Test Cases:**  
  [Google Spreadsheet with Test Plan and Test Cases](https://docs.google.com/spreadsheets/d/1PQKovxJqrpASrlVtSQzp3eT4QfSpCO0l1XvSuhWfuJs/edit?usp=sharing)

## Timeline (5 Days)

### Day 1 — Introduction  
- Reviewed the task, objectives, and the structure of the Redmine web application (https://www.redmine.org/)  
- Analyzed the main features to be tested  

### Day 2 — Test Planning  
- Created a detailed test plan, including testing objectives and coverage of the main functionalities  
- Developed test cases, including positive and basic negative scenarios  

### Day 3 — Environment Setup and First Test  
- Set up the local environment: VS Code, Node.js, Playwright  
- Wrote the first automated test for a basic scenario (loading the homepage)  

### Day 4 — Test Automation  
- Automated tests for all main test cases  
- Ran tests locally in the Chromium browser  
- Configured GitHub Actions for automatic test runs on repository push  
- Integrated Allure reporting for convenient result analysis  

### Day 5 — Troubleshooting and Finalization  
- Encountered issues running tests in the Edge browser after Windows and library updates  
- Discovered the importance of including additional build packages (C++ Build Tools and Python) when installing Node.js  
- Removed all npm modules and reinstalled dependencies  
- Reconfigured the environment and browser drivers  
- Finalized test scripts and CI/CD configuration  
- Prepared documentation and reports  

---

## Tools and Technologies Used  
- **VS Code** — code editor  
- **Node.js** — JavaScript runtime  
- **Playwright** — browser automation library  
- **GitHub Actions** — CI/CD for automated test execution  
- **Allure** — detailed test reporting tool  
- **Cursor** — application for working with text  

---

## Test Description  
- Tested core Redmine web application functionalities (registration, login, search, navigation, file uploads)  
- Wrote positive and basic negative scenarios  
- Structured tests by modules using the Page Object Model (POM)  

---

## Conclusions  
- Learned how to configure the Playwright environment, including running tests both locally and in CI  
- Gained experience with Allure report generation and result publishing  
- Discovered the importance of additional system packages for Node.js on Windows  
- Used Cursor for the first time — improved coding efficiency  

---
