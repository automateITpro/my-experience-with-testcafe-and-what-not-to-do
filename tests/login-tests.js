import config from '../config';
import loginPage from '../pages/login-page';
import mainPage from '../pages/main-page';
import { roleAdmin } from '../utils/test-users';

fixture `User login tests`;

test('Login with admin user', async t => {
    await t
        .useRole(roleAdmin)
        .expect(mainPage.welcome.exists).ok();
});

test('Try to login with invalid credentials', async t => {
    await t.navigateTo(config.baseUrl);

    await loginPage.login('aaa','aaa');

    await t.expect(loginPage.errorMessage.innerText).eql('Invalid credentials');
});
