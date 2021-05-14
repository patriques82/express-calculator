import 'regenerator-runtime/runtime'
import { Builder, By } from 'selenium-webdriver'
import { Options as FirefoxOptions } from 'selenium-webdriver/firefox.js';

describe('UI tests', () => {
  let driver;
  
  beforeAll(() => {
    driver = new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(new FirefoxOptions().headless())
      .build()
  })

  it('should show number buttons', async () => {
    await driver.get("http://localhost:3000")
    const elem = await driver.findElement(By.css('h1#title'));
    const title = await elem.getText()
    expect(title).toBe("Express Calculator")
  })
})