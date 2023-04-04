import { taskPage } from "./taskPage";
export class MainPage {

    elements = {
        profileMenu: () => cy.get('div[class="+syWHcL _0J7x-Vo settings_avatar _2a3b75a1"]'),
        settingsButton: () => cy.get('div[class="_2a3b75a1 _509a57b4 e5a9206f _3692f9c2 _50ba6b6b _985b733f"]'),
        addTaskButton: () => cy.get('button[class="plus_add_button"]'),
        taskNameField: () => cy.get('p[data-placeholder="Task name"]'),
        taskDescriptionField: () => cy.get('p[data-placeholder="Description"]'),
        saveTaskButton: () => cy.get('button[type="submit"]'),
        successAlert: () => cy.get('div[class="a83bd4e0 _2a3b75a1"]'),
        task: () => cy.contains('Test task')

    }

    getSetting() {
        this.elements.profileMenu().click();
        return this.elements.settingsButton();
    }

    clickAddTaskButton() {
        this.elements.addTaskButton().click();
        return this;
    }

    fillNewTaskData(name, description) {
        this.elements.taskNameField().type(name);
        this.elements.taskDescriptionField().type(description);
        return this;

    }
    
    clickSaveTaskButton() {
        this.elements.saveTaskButton().click();
        return this;
    }

    getSuccessAlert() {
        return this.elements.successAlert();
    }

    openTask() {
        this.elements.task().click();
        return taskPage;
    }
}

export const mainPage = new MainPage();