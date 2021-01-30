const browsers = ["Chrome", "IE", "Edge", "Firefox", "Safari"];
const {Builder, By, Key, util} = require('selenium-webdriver');
let driver;

const browser = async(select="chrome", key="") => {
    select = select.toLowerCase();
    if(select == "firefox") {
        driver = await new Builder().forBrowser('firefox').build();
    } else if(select == "safari") {
        driver = await new Builder().forBrowser('safari').build();
    } else if(select == "edge") {
        driver = await new Builder().forBrowser('edge').build();
    } else if(select == "ie" || select == "internetexplorer" || select == "internet explorer") {
        driver = await new Builder().forBrowser('ie').build();
    } else if(select == "chrome") {
        driver = await new Builder().forBrowser('chrome').build();
    } else {
        console.error("You must choose from this list for your browser: " + browsers.join(', '));
        return;
    }
}

const goto = async(website="https://google.com") => {
    return await driver.get(website);
}

const get = async(element="q", sendKeys=false, send=["SimpleScraper",Key.RETURN]) => {
    if(keys) {
        return await driver.findElement(By.name(element)).sendKeys(send);
    } else {
        return await driver.findElement(By.name(element));
    }
}

module.exports = {
    browser, gotoWebsite, get
}
