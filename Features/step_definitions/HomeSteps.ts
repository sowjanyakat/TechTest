import { Then, When} from '@cucumber/cucumber';
import {By, Key, until, WebDriver} from "selenium-webdriver";
import { Driver } from 'selenium-webdriver/chrome';
let { myglobal, sleep,MyWaitUntil } = require('../step_definitions/world')
let homepage=require("../pages/homepage")
  When('I navigate to homepage', async function () {
    
   homepage.navigatetohomepage();
  });
  Then('verify the page is loading successfully', async function () {
   homepage.verifytitle();
   homepage.verifylogo();
   homepage.verifytextonthepage()
    
  });


