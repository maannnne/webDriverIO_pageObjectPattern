module.exports["default"] = class Base{
    constructor(selector){
    }

    open(path) {
        browser.url(path);
    }

    getHtml(){
        return browser.getHTML('html');
    }

    navigateToURL(url, page) {
        browser.url(url);
        return page;
    }
}