const { except, util } = require("chai");
const { Given, When, Then, Before, After} = require("@cucumber/cucumber");
const {Builder, By, Key, until, sleep} = require("selenium-webdriver");
const{ delay } = require("../utils/delay.js");


Given("Test registration functionality", {timeout: 30000}, async function (){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:500/user/insert");
    await driver.findelement(By.id("UFullName")).sendkeys("test");
    await driver.findelement(By.id("UAddress")).sendkeys("test");
    await driver.findelement(By.id("UPhoneNo")).sendkeys("12345");
    await driver.findElement(By.id("UUsername")).sendKeys("test");
    await driver.findElement(By.id("UPassword")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("registeuserrbtn")).click();

    await driver.wait(until.elementLocated(By.id("Loginuserform")), 300000);
    except(await driver.wait(util.elementLocated(By.id("Loginuserform"))));
    await driver.quit();

} );