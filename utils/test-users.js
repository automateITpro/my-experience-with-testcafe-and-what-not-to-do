import { Role } from 'testcafe';
import config from '../config';
import loginPage from '../pages/login-page';

const roleAdmin = Role(config.baseUrl, async t => {
    await loginPage.login('Admin','admin123');
}, { preserveUrl: true });

const roleEmployee = Role(config.baseUrl, async t => {
    await loginPage.login('testUser','test1234');
}, { preserveUrl: true });

export { roleAdmin, roleEmployee };
