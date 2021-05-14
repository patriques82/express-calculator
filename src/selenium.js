import { Builder, By, Key, until } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/firefox.js';

const screen = {
  width: 640,
  height: 480
}

const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new Options().windowSize(screen))
    .build();

const example = async () => {
  await driver.get('http://www.google.com/ncr')
  await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
  await driver.findElement(By.id('zV9nZe')).click()
  await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
  await driver.quit()
}

example()