import {By,Key,until,WebDriver, WebElement} from 'selenium-webdriver'
import { assert } from 'chai';
import { Executor } from 'selenium-webdriver/http';
import { Keyboard } from 'selenium-webdriver/lib/input';
let { myglobal, sleep,MyWaitUntil } = require('../step_definitions/world')
let driver:WebDriver
class homepage{
   
    navigatetohomepage(){
        driver=myglobal.driver;
        driver.get("http://demo.testfire.net/")
        sleep(10000)
    }
    async verifytitle(){
        let title =await (driver.getTitle());
        console.log(title)
        assert.equal(title,'Altoro Mutual');
    }
    async verifylogo(){
        let b = await (driver.findElement(By.xpath("//img[@src='/images/logo.gif']"))).isDisplayed()
        console.log(b);
        assert.equal(b,true)
    }
    async verifytextonthepage(){
        let innertext:string = await(driver.executeScript("return document.documentElement.innerText"))
        console.log(innertext)
        
    }
    


    
}module.exports=new homepage();