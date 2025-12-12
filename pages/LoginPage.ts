import {Page} from '@playwright/test'

export class LoginPage{
    readonly page:Page;
    readonly usernameField;
    readonly passwordField;
    readonly loginButton;
    readonly successMessage;
    readonly errorMessage;

    constructor(page:Page){
        this.page = page;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#submit');
        this.successMessage = page.locator('.post-title');
        this.errorMessage = page.locator('#error');
    }

    async navigate(){
        await this.page.goto('/practice-test-login/');
    }

    async login(username:string, password:string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }



}