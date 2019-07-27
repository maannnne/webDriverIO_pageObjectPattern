const assert = require('assert');
const Home = require('../pageObjects/home.page.js').default;

describe('navigation bar items function correctly', () => {
    let home = new Home();
    it('navbar item "Guide" functions correctly', () => {
        browser.url('/');
        home.clickOnGuide();
        let title = browser.getTitle();
        assert(title, 'Getting Started · WebdriverIO');
    });

    it('navbar item "API" functions correctly', () => {
        browser.url('/');
        home.clickOnAPI();
        let title = browser.getTitle();
        assert(title,'API Docs · WebdriverIO');
    });

    it('navbar item "Help" functions correctly', () => {
        browser.url('/');
        home.clickOnHelp();
        let title = browser.getTitle();
        assert(title,'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('navbar item "Blog" functions correctly', () => {
        browser.url('/');
        home.clickOnBlog();
        let title = browser.getTitle();
        assert(title,'Blog · WebdriverIO');
    });
});
