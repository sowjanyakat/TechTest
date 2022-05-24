import {Given, Then, When} from '@cucumber/cucumber';
import {By, Key, until, WebDriver} from "selenium-webdriver";
//let { myglobal, sleep,MyWaitUntil } = require('../world')
let homepage=require("../pages/homepage")
let loginpage=require("../pages/loginpage")
When('I click on sign in', function () {
    
    homepage.navigatetohomepage();
    loginpage.clickonsignin();
  });
When('I login with credentials and verify the accounts', function () {
    loginpage.performloginandgetaccountsdetails()
  }); 
Then('logout from the account', function () {
    loginpage.logoutformtheaccount();
  });