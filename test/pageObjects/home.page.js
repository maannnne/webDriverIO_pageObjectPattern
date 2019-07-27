const Base = require('./base.page.js').default;

module.exports['default'] = class Home extends Base{
    constructor() {
        super();
    }


    //selectors as getter functions
    get NavGuide() {return $('/html/body/div[1]/div/header/div/nav/ul/li[1]/a');}
    get NavAPI() {return $('/html/body/div[1]/div/header/div/nav/ul/li[2]/a');}
    get NavHelp() {return $('/html/body/div[1]/div/header/div/nav/ul/li[3]/a');}
    get NavBlog() {return $('/html/body/div[1]/div/header/div/nav/ul/li[4]/a');}


    open(){
        super.open('');
    }

    clickOnGuide(){
        this.NavGuide.click();
        browser.pause(3000);  
    }   

    clickOnAPI(){
        this.NavAPI.click();
        browser.pause(3000);
    }

    clickOnHelp(){
        this.NavHelp.click();
        browser.pause(3000);
    }

    clickOnBlog(){
        this.NavBlog.click();
        browser.pause(3000);
    }
}
