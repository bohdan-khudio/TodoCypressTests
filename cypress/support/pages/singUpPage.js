export class SingUpPage {

    elements = {
        emailField: () => cy.get('input[type="email"]'),
        passwordField: () => cy.get('input[type="password"]'),
        singUpButton: () => cy.get('button[type="submit"]')
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

    fillSingUpForm(email, password) {
        this.clickEmailField();
        this.clearEmailField();
        this.setEmailField(email);
        this.clickPasswordField();
        this.clearPasswordField();
        this.setPasswordField(password);
    }

    createAccount(email, password) {
        this.fillSingUpForm(email, password);
        return this;
    }
    
    getSingUpButton() { 
        return this.elements.singUpButton();
    }

}

export const singUpPage = new SingUpPage();