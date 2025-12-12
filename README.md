# Playwright Login Automation Assignment

This project automates the login functionality of the Practice Test Automation website using Playwright with TypeScript and a Page Object Model (POM) framework.

- Page Object Model (POM) for easy scalability
- No hard-coded locators in test scripts
- Assertions for successful and failed login validations
- Automated 4 test cases (out of 10)
- HTML test report included

---

## Installation

1. Clone the repository
```bash
git clone https://github.com/KDarshan95/playwright-assignment.git
cd playwright-assignment
```
2. Install dependencies 
```bash
npm install
```

3. Install playwright
```bash
npx playwright install
```

---

## Run Tests

default:headless from config
```bash
npm test (default:headless from config)
```
headed: Browser Visible
```bash
npm run test:headed 
```

---

## View Report
```bash
npm run report
```

---
Test data are defined in:  test-data/credentials.ts

---

Positive Test Cases

TC01: Login with valid username & password
TC02: Validate navigation to dashboard page
TC03: Validate welcome message after login
TC04: Validate logout button is visible
TC05: Validate login button is enabled

Negative Test Cases

TC06: Login with invalid username
TC07: Login with invalid password
TC08: Login with both username & password invalid
TC09: Login with empty username
TC10: Login with empty password

---

Instructions:

1. Clone the repo
2. Run npm install 
3. Run npx playwright install
4. Execute npm test (headless) or npm run test:headed (headed)
5. View results with npm run report