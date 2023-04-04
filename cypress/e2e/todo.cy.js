import { mainPage } from "../support/pages/mainPage";
import { loginPage } from "../support/pages/loginPage";

describe('to do', () => {

    beforeEach(() => {

        cy.visit('/');
        cy.intercept('/API/v9.0/user/login').as('loginRequest');
        loginPage.login('bahdan510@gmail.com', 'SchoolLviv22');
        cy.wait('@loginRequest');

    });

    it('add task', () => {
                
        mainPage.clickAddTaskButton()
        .fillNewTaskData('Test task', 'Test description')
        .clickSaveTaskButton()
        .getSuccessAlert()
        .should('have.text', 'Task added to Inbox');  
        
    });

    it('delete task', () => {

        mainPage.openTask()
        .clickOptionsButton()
        .clickDeleteTaskButton()
        .clickSumbmitDeleteButton();

    });

    it.only('edit task', () => {

        mainPage.openTask()
        .enterNewTaskName('Edited task')
        .clickSaveButton()
        .getTaskNameFild()
        .should('have.text', 'Edited taskActivate to edit the task name');

    });
});
