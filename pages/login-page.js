import {t, Selector } from 'testcafe';

class LoginPage {
    constructor () {
        this.username     = Selector('#txtUsername');
        this.password     = Selector('#txtPassword');
        this.loginButton  = Selector('#btnLogin');
        this.errorMessage = Selector('#spanMessage', {timeout: 10000});
    }

    async login(userName, password) {
        await t
            .typeText(this.username, userName)
            .typeText(this.password, password)
            .click(this.loginButton);
    }
}

export default new LoginPage();
