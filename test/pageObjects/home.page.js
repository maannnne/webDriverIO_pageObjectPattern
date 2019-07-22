const Base = require('./base.page.js').default;

module.exports['default'] = class Home extends Base{
    constructor(selector) {
        super();
        this.selector = selector;
    }


    //selectors as getter functions
    get NavGuide() {return $('/html/body/div[1]/div/header/div/nav/ul/li[1]/a');}


    open(){
        super.open('');
    }

    clickOnGuide(){
        this.NavGuide.click();
        browser.pause(3000);  
    }   
}
