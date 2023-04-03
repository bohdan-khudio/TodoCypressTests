export class ForgotPasswordPage {
    elements = {
        emailField: () => cy.get('input[type="email"]'),
        resetPassswordButton: () => cy.get('button[type="submit"]')
    }

    clickEmailField() {
        this.elements.emailField().click();
    }

    clearEmailField() {
        this.elements.emailField().clear();
    }

    setEmailFild(email) {
        this.elements.emailField().type(email);
    }

    getResetPasswordButton() {
        return this.elements.resetPassswordButton();
    }

    fillEmail(email) {
        this.clickEmailField;
        this.clearEmailField;
        this.setEmailFild(email);
    }

    resetPassword(email) {
        this.fillEmail(email);
        return this;
    }

}

export const forgotPasswordPage = new ForgotPasswordPage();