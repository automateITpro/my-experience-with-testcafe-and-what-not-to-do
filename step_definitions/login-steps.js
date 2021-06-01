import { Given, When, Then } from '@cucumber/cucumber';
import config from '../config';
import loginPage from '../pages/login-page';
import mainPage from '../pages/main-page';
import { roleAdmin, roleEmployee } from '../utils/test-users';

Given(/the user is in login page/, async (t) => {
    await t.navigateTo(config.baseUrl);
});

When(/the (.*) user logs in/, async (t, [user]) => {
    switch (user) {
        case 'admin':
            await t.useRole(roleAdmin);
            break;

        case 'employee':
            await t.useRole(roleEmployee);
            break;
    }
});

When(/the user enters invalid login credentials/, async (t, [], loginDetails) => {
    await loginPage.login(loginDetails.hashes()[0]['username'],loginDetails.hashes()[0]['password']);
});

Then(/the user should see home page/, async (t) => {
    await t.expect(mainPage.welcome.exists).ok();;
});

Then(/error message "(.*)" is displayed/, async (t, [errorMessage]) => {
    await t.expect(loginPage.errorMessage.innerText).eql(errorMessage);
});