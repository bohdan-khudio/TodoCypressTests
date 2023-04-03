import { loginPage } from "../support/pages/loginPage"
import { mainPage } from "../support/pages/mainPage";

describe('login', () => {
  it('login with valid data', () => {
    
    cy.visit('/');

    loginPage.login("bahdan510@gmail.com", "SchoolLviv22");

    // cy.intercept("POST", "/API/v9.0/user/login").as("loginRequest");
    // cy.wait("@loginRequest");

    cy.wait(20000);

    mainPage.getSetting().should("contain.text", "Settings");

  });

  it('login with invalid data', () => {

    cy.visit('/');

    loginPage.login("invalid@email.com", "invalidPassword");
    
    cy.wait(10000);

    loginPage.getAlertMessage().should("have.text", "Wrong email or password.");
  });


  it('forgot password', () => {
    cy.visit('/');

    loginPage.clickForgotPasswordButton()
    .resetPassword("bahdan510@gmail.com")
    .getResetPasswordButton()
    .should("have.text", "Reset my password");

  });

  it('create account', () => {

    cy.visit('/');

    loginPage.clickSingUpButton()
    .createAccount("bahdan510@gmail.com", "SchoolLviv22")
    .getSingUpButton()
    .should("have.text", "Sign up with Email");

  });
});