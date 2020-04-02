

let webdriver = require('selenium-webdriver');
let browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome'}).build();




browser.get("https://www.shazam.com/ru/charts/top-50/world");


browser.wait(webdriver.until.elementLocated(webdriver.By
    .xpath('/html/body/div[3]/div/main/div/div[2]/div[1]/ul/li[1]/article/div/div[2]/div[1]/a'))).then(function() {
    console.log('test')
    browser.wait(webdriver.until.elementsLocated(webdriver.By
        .xpath('/html/body/div[3]/div/main/div/div[2]/div[1]/ul/li/article/div/div[2]/div[1]/a')),3000).then(function(elems){
            elems.forEach(function (elem) {
                elem.getAttribute("href").then(function(textValue){
                    console.log(textValue);
    
    })})})});


