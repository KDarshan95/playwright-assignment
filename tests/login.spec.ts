import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { validUser, invalidUser } from '../test-data/credentials'

let loginPage: LoginPage;

test.describe('Login Page Automation', () => {
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.navigate();
  })

  test('TC01: Successful login with valid credentials', async () => {

    await loginPage.login(validUser.username, validUser.password);
    await expect(loginPage.successMessage).toHaveText('Logged In Successfully')
  })


  test('TC06: Login with invalid username - verify error message', async () => {

    await loginPage.login(invalidUser.username, validUser.password)
    await expect(loginPage.errorMessage).toHaveText('Your username is invalid!')
  })


  test('TC07: Login with invalid password - verify error message', async () => {

    await loginPage.login(validUser.username, invalidUser.password)
    await expect(loginPage.errorMessage).toHaveText('Your password is invalid!')
  })


  test('TC09: Login with empty username should not allow login', async () => {

    await loginPage.login('', validUser.password)
    await expect(loginPage.errorMessage).toBeVisible()
  })
})