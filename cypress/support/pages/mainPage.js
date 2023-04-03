export class MainPage {

    elements = {
        profileMenu: () => cy.get('div[class="+syWHcL _0J7x-Vo settings_avatar _2a3b75a1"]'),
        settingsButton: () => cy.get('div[class="_2a3b75a1 _509a57b4 e5a9206f _3692f9c2 _50ba6b6b _985b733f"]')
    }

    getSetting() {
        this.elements.profileMenu().click();
        return this.elements.settingsButton();
    }
}

export const mainPage = new MainPage();