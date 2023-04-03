import { forgotPasswordPage } from "./forgotPasswordPage";
import { singUpPage } from "./singUpPage";

export class LoginPage {

    elements = {
        emailField: () => cy.get('input[type="email"]'),
        passwordField: () => cy.get('input[type="password"]'),
        loginButton: () =>  cy.get('button[type="submit"]'),
        forgotPasswordButton: () => cy.contains('Forgot your password?'),
        alertMessage: () => cy.get('div[class="a83bd4e0 _266d6623 _8f5b5f2b _2a3b75a1"'),
        singUpButton: () => cy.contains('Sign up')
    }
    
    // Email
    clickEmailField() {
        this.elements.emailField().click();
    }

    clearEmailField() {
        this.elements.emailField().clear();
    }

    setEmailField(text) {
        this.elements.emailField().type(text);
    }

    // Password
    clickPasswordField() {
        this.elements.passwordField().click();
    }

    clearPasswordField() {
        this.elements.passwordField().clear();
    }

    setPasswordField(text) {
        this.elements.passwordField().type(text);
    }

    // LoginButton
    clickLoginButton() {
        this.elements.loginButton().click();
    }

    

    fillLoginForm(email, password) {
        this.clickEmailField();
        this.clearEmailField();
        this.setEmailField(email);
        this.clearPasswordField();
        this.clearPasswordField();
        this.setPasswordField(password);  
    }

    login(email, password) {
        this.fillLoginForm(email, password);
        this.clickLoginButton();
    }

    clickForgotPasswordButton() {
        this.elements.forgotPasswordButton().click();
        return forgotPasswordPage;
    }

    getAlertMessage() {
        return this.elements.alertMessage();
    }
    
    clickSingUpButton() {
        this.elements.singUpButton().click();
        return singUpPage;
    }
}

export const loginPage = new LoginPage();