const assert = require('assert');
const Home = require('../pageObjects/home.page.js').default;

describe('navigation bar items function correctly', () => {
    it('guide functions correctly', () => {
        let home = new Home();
        browser.url('/');
        home.clickOnGuide();
        let title = browser.getTitle();
        assert(title, 'Getting Started · WebdriverIO');
    })
});
