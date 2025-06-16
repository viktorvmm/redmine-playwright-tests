# Redmine Test Automation Project

This project contains automated tests for the Redmine project management tool using Playwright.  
It was created as a part of a training program to practice test automation, CI/CD integration, and reporting with Allure.

---

## Project Structure

- `tests/` – Test specifications
- `pages/` – Page Object Models
- `fixtures/` – Test fixtures and shared test objects
- `utils/` – Utility classes and helper functions

---

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
    npx allure generate allure-results --clean && npx allure open
    ```

---

## Test Reports

Test reports are available in two formats:
- **Allure reports** (generated after test execution)
- **GitHub Pages** (automatically deployed from the `allure-report` directory)

View GitHub Pages report:  
[https://viktorvmm.github.io/redmine-playwright-tests/](https://viktorvmm.github.io/redmine-playwright-tests/)

---

## Project Documentation

- **Test Plan and Test Cases:**  
  [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1PQKovxJqrpASrlVtSQzp3eT4QfSpCO0l1XvSuhWfuJs/edit?usp=sharing)

---

## Project Timeline

### Day 1 — Introduction
- Reviewed the task, objectives, and the structure of the Redmine web application ([redmine.org](https://www.redmine.org/))
- Analyzed the main features to be tested

### Day 2 — Test Planning
- Created a detailed test plan with clear testing objectives and feature coverage
- Developed test cases, including positive and basic negative scenarios

### Day 3 — Environment Setup and First Test
- Set up the local environment: VS Code, Node.js, Playwright
- Wrote the first automated test for a basic scenario (loading the homepage)

### Day 4 — Test Automation
- Automated tests for all main test cases
- Ran tests locally using the Chromium browser
- Configured GitHub Actions for automatic test runs on repository push
- Integrated Allure reporting for convenient result analysis

### Day 5 — Troubleshooting and Finalization
- Encountered issues with Edge browser compatibility after Windows and library updates
- Identified the importance of including additional build packages (C++ Build Tools and Python) when installing Node.js
- Removed all npm modules and reinstalled dependencies
- Reconfigured the environment and browser drivers
- Finalized the test scripts and CI/CD configuration
- Prepared documentation and reports

---

## Test Coverage

- Core Redmine functionalities:
  - Registration
  - Login
  - Search
  - Navigation
  - File uploads
- Positive and basic negative scenarios
- Modular test structure using the Page Object Model (POM)
- Test fixtures to simplify page object management
- HTTP status checking utilities

---

## Tools and Technologies Used

- **VS Code** — code editor
- **Node.js** — JavaScript runtime
- **Playwright** — browser automation library
- **GitHub Actions** — CI/CD for automated test execution
- **Allure** — test reporting tool
- **Cursor** — application for working with text

---

## Conclusions

- Gained practical experience in setting up Playwright automation, both locally and in CI
- Learned how to generate Allure reports and publish them via GitHub Pages
- Discovered critical environment configuration steps for Node.js on Windows
- Improved coding efficiency by using Cursor for the first time

---

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
