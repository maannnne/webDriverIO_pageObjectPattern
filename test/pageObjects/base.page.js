module.exports["default"] = class Base{
    constructor(selector){
        
    }

    open (path) {
        browser.url(path);
    }

    getHtml(){
        return browser.getHTML('html');
    }

    navigateToURL(url, page) {
        browser.url(url);
        return page;
    }

    click(selector, index = 0) {
        selector.waitForExist(100000);
        selector.waitForEnabled(100000);
        let element;
        if(index !== 0) {
          element = browser.elements(selector).value[index];
        } else {
          element = browser.element(selector);
        }
        element.waitForExist(100000);
        element.waitForEnabled(100000);
        element.click();
    }
      
    setValue(selector, value, index = 0) {
        selector.waitForExist(100000);
        selector.waitForEnabled(100000);
        const element = browser.elements(selector).value[index];
        element.waitForExist(100000);
        element.waitForEnabled(100000);
        element.setValue(value);
        return this;
    }

    getValue(selector, index = 0) {
        selector.waitForExist(100000);
        return selector.elements().value[index].getText();
    }
}