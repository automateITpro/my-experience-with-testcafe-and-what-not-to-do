import mainPage from '../pages/main-page';
import { roleAdmin, roleEmployee } from '../utils/test-users';

fixture `Main menu tests`;

test.only('Admin tab visibility', async t => {
    await t
        .useRole(roleAdmin)
        .expect(mainPage.adminTab.visible).ok()
        .useRole(roleEmployee)
        .expect(mainPage.adminTab.visible).notOk()
        .useRole(roleAdmin) //login no longer needed and testcafe will just open previously saved login info
        .expect(mainPage.adminTab.visible).ok();
});
