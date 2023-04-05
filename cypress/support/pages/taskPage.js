export class TaskPage {
    elements = {
        optionsButton: () => cy.get('button[aria-label="More actions"]'),
        taskNameField: () => cy.get('div[aria-label="Task name"]'),
        completeButton: () => cy.get('button[aria-label="Checkbox for Test task"]'),
        deleteTaskButton: () => cy.contains('Delete task…'),
        sumbmitDeleteButton: () => cy.get('button[type="submit"]'),
        saveButton: () => cy.get('button[aria-label="Save"]'),
        completeAlert: () => cy.get('div[class="a83bd4e0 _2a3b75a1"'),

    }

    clickOptionsButton() {
        this.elements.optionsButton().click();
        return this;
    }
    
    clickDeleteTaskButton() {
        this.elements.deleteTaskButton().click();
        return this;
    }

    clickSumbmitDeleteButton() {
        this.elements.sumbmitDeleteButton().click();
    }

    enterNewTaskName(name) {
        this.elements.taskNameField().click();
        this.elements.taskNameField().clear();
        this.elements.taskNameField().type(name);
        return this;
    }
    
    clickSaveButton() {
        this.elements.saveButton().click();
        return this;
    }

    getTaskNameFild() {
        return this.elements.taskNameField();
    }

    clickCompleteButton() {
        this.elements.completeButton().click();
        return this;
    }

    getCompleteAlert() {
        return this.elements.completeAlert();
    }

}

export const taskPage = new TaskPage();