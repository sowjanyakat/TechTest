import {By, WebDriver, Actions, until, WebElement} from 'selenium-webdriver'
import { assert } from 'chai';
import { Executor } from 'selenium-webdriver/http';

let { myglobal, sleep,MyWaitUntil } = require('../step_definitions/world')
let driver:WebDriver

class loginpage{
    async clickonsignin(){
        await myglobal.driver.executeScript('document.getElementById("LoginLink").click();')
        sleep(5000)
        let b=await(myglobal.driver.findElement(By.xpath("//h1[text()='Online Banking Login']"))).isDisplayed();
        assert.equal(b,true);
    }
    async performloginandgetaccountsdetails(){
        await myglobal.driver.executeScript('document.getElementById("uid").value="admin";');
        await myglobal.driver.executeScript('document.getElementById("passw").value="admin";');
        await myglobal.driver.findElement(By.name("btnSubmit")).click();
        sleep(5000)
        let b=await(myglobal.driver.findElement(By.xpath("//h1[contains(text(),'Hello Admin')]"))).isDisplayed();
        assert.equal(b,true);
        await myglobal.driver.findElement(By.id("listAccounts")).click();
        let sele=await myglobal.driver.findElements(By.xpath("//select[@id='listAccounts']/option"));
        sleep(5000)
        let count=sele.length;
        console.log(sele.length);
        assert.equal(count,2);
        for(let i=0;i<count;i++){
            
           let text= await (sele[i].getText());
           console.log(text)
        }
        
    }
    async logoutformtheaccount(){
        await myglobal.driver.executeScript('document.getElementById("LoginLink").click();')
       let assertele= await myglobal.driver.findElement(By.xpath("//h1[contains(text(),'Hello Admin')]")).isDisplayed();
       assert.isFalse(assertele);
    }

}module.exports=new loginpage();