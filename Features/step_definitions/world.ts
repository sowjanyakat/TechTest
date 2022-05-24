import { WebDriver } from "selenium-webdriver";
import { AfterStep, AfterAll } from "@cucumber/cucumber";

const { Before, After } = require('@cucumber/cucumber')
let { setDefaultTimeout } = require('@cucumber/cucumber')
var webdriver = require('selenium-webdriver');



require('chromedriver')

const DEFAULT_TIMEOUT = 1000*60;
var driver;
var x=0;
var myglobal = {driver:null}

setDefaultTimeout(DEFAULT_TIMEOUT);
console.log("in world");
async function openBrowser(){
    x=0;
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    await driver.manage().setTimeouts({
        pageLoad : 440000,
        implicit : 10000,
    })
    return driver;
}
After (async function(){
    await quitBrowser()
})
async function quitBrowser(){
    console.log("After scenario")
    driver.quit();
}
Before(async function(){
    console.log("Before scenario");
    myglobal.driver = await openBrowser()
})
function sleep(x){
    return new Promise((resolve) => {
        setTimeout(resolve, x);
    });
}
async function MyWaitUntil(by:any ){
    try{
        let e = await driver.findElement(by)
    return true }
    catch(ex){
     console.log(ex);
     return false
     }
     }

     module.exports = {MyWaitUntil,myglobal,sleep};