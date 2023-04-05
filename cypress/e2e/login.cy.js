import { loginPage } from "../support/pages/loginPage"
import { mainPage } from "../support/pages/mainPage";

describe('login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('login with valid data', () => {

    cy.intercept("/API/v9.0/user/login").as("loginRequest");

    loginPage.login(Cypress.env('user').email, Cypress.env('user').password);

    cy.wait("@loginRequest");

    mainPage.getSetting().should("contain.text", "Settings");

  });

  it('login with invalid data', () => {

    cy.intercept("/API/v9.0/user/login").as("loginRequest");

    loginPage.login("invalid@email.com", "invalidPassword");
    
    cy.wait("@loginRequest");

    loginPage.getAlertMessage().should("have.text", "Wrong email or password.");
  });


  it('forgot password', () => {

    loginPage.clickForgotPasswordButton()
    .resetPassword("bahdan510@gmail.com")
    .getResetPasswordButton()
    .should("have.text", "Reset my password");

  });

  it('create account', () => {

    loginPage.clickSingUpButton()
    .createAccount("bahdan510@gmail.com", "SchoolLviv22")
    .getSingUpButton()
    .should("have.text", "Sign up with Email");

  });
});