import { projectPage } from "./projectPage";

export class AddProjectPage {

    elements = {
        projectNameField: () => cy.get('#edit_project_modal_field_name'),
        addProjectButton: () => cy.get('button[class="_8313bd46 _7a4dbd5f _5e45d59f _2a3b75a1 _56a651f6"]'),        
    }

    fillProjectName(name) {
        this.elements.projectNameField().type(name);
        return this;
    }

    clickAddProjectButton() {
        this.elements.addProjectButton().click();
        return projectPage;
    }

}

export const addProjectPage = new AddProjectPage();