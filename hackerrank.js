const puppeteer = require("puppeteer");   // here require module puppeteer
const mail = "dorabi9674@hhmel.com";       //our temporary mail
const pass = "123456789";                  // passwrd

let browserPromise = puppeteer.launch({ headless: false ,defaultViewport:null,args: ['--start-fullscreen']}); //launch module 
let page;                                                   // page a variable in which when browser is open we see that particular page
browserPromise.then(function(browser){
    console.log("Browser is opened");
    let pagePromise = browser.newPage();        //addind request or we can say promise
    return pagePromise;                         // return our promise
}).then(function(pageInstance){
    console.log("Page is opened");
    page = pageInstance
    let urlPromise = page.goto('https://www.hackerrank.com/');  //we use goto by which we have url on which we hav to go
    return urlPromise;
}).then(function(){
    console.log("Hackerrank page is opened");
    let waitPromise = page.waitForSelector("ul.menu a");     // selecting page contents and wait for selector as it may not be opened directly
    return waitPromise;
}).then(function(){
    let clickPromse = page.click("ul.menu a");   // now promsise to open it 
    return clickPromse;                          // return promise to slect the selectors
}).then(function(){
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");  //again an selector
    return waitPromise;
}).then(function(){
    let domClickPromse = page.evaluate(function(){
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button"); //same as previous one to select and make it a promise
        btns[1].click();
        return;
    });
    return domClickPromse;
}).then(function(){
  let waitPromise = page.waitForSelector("#input-1");  //selecting the input category where mail and paasswrd to be enter
    return waitPromise;
}).then(function(){
    let mailTypedPromise = page.type("#input-1",mail,{ delay: 100 });  //here we have input of mail DELAY use how to enter fastly ans slowly
    return mailTypedPromise;
}).then(function(){
    let passTypedPromise = page.type("#input-2",pass,{delay:100});  //passwrd entered 
    return passTypedPromise;
}).then(function(){
    let clickPromse = page.click('button[data-analytics="LoginPassword"]');   //click on the login selector 
    return clickPromse;
}).then(function(){
    console.log("Login successful hogya hai ")
    let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
    return waitPromise;
}).then(function(){
    let clickPromise = page.click('[data-automation="algorithms"]');
    return clickPromise;
}).then(function(){
    return page.waitForSelector(".filter-group");
}).then(function(){
    let domSelectPromise = page.evaluate(function(){
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function(){
    console.log("warmup Selected");
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
}).then(function(){
    console.log("done for this and now we have to du further ")
    
})