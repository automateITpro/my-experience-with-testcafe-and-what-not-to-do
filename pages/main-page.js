import { Selector } from 'testcafe';

class MainPage {
    constructor () {
        this.welcome =  Selector('#welcome');
        this.adminTab = Selector('#menu_admin_viewAdminModule');
    }
}

export default new MainPage();
