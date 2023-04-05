import { mainPage } from "../support/pages/mainPage";
import { loginPage } from "../support/pages/loginPage";

describe('to do', () => {

    beforeEach(() => {

        cy.visit('/');
        cy.intercept('/API/v9.0/user/login').as('loginRequest');
        loginPage.login(Cypress.env('user').email, Cypress.env('user').password);
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

    it('edit task', () => {

        mainPage.openTask()
        .enterNewTaskName('Edited task')
        .clickSaveButton()
        .getTaskNameFild()
        .should('have.text', 'Edited taskActivate to edit the task name');

    });

    it('complete task', () => {

        mainPage.openTask()
        .clickCompleteButton()
        .getCompleteAlert()
        .should('have.text', '1 task completed');

    });

    it('sort by due date', () => {

        mainPage.clickOptionsButton()
        .clickSortingMenu()
        .selectDueDateOption();

    });

    it('sort by priority', () => {

        mainPage.clickOptionsButton()
        .clickSortingMenu()
        .selectPriorityOption();

    });

    it('create project', () => {

        mainPage.clickAddProjectButton()
        .fillProjectName('Test project')
        .clickAddProjectButton()
        .getProjectName()
        .should('have.text', 'Test project(No Section)');

    });

    it('move task', () => {

        mainPage.contextClickTask()
        .clickMoveToProjectButton()
        .selectHomeProject()
        .getSuccessAlert()
        .should('have.text', 'Task moved to Home ');

    });

});
