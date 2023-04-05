import { mainPage } from "./mainPage";

export class ContextTaskMenu {

    elements = {
        moveToProjectButton: () => cy.contains('Move to project'),
        homeProject: () => cy.get('div[class="a83bd4e0 a8d37c6e _2f303ac3 _2a3b75a1 _211eebc7"]').contains('Home')
    }

    clickMoveToProjectButton() {
        this.elements.moveToProjectButton().click();
        return this;
    }

    selectHomeProject() {
        this.elements.homeProject().click();
        return mainPage;
    }

}

export const contextTaskMenu = new ContextTaskMenu();