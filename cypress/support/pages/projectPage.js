export class ProjectPage {

    elements = {
        projectName: () => cy.get('span[class="simple_content"]')
    }

    getProjectName() {
        return this.elements.projectName();
    }

}

export const projectPage = new ProjectPage();