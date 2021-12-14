const {By} = require('selenium-webdriver');

module.exports = {
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Praise to the man who communed with Jehovah!');
        
        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(6000);

        await driver.findElement(By.xpath('//input')).sendKeys('Jesus anointed that Prophet and Seer.');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(5600);

        await driver.findElement(By.xpath('//input')).sendKeys('Blessed to open the last dispensation,');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(5200);

        await driver.findElement(By.xpath('//input')).sendKeys('Kings shall extol him, and nations revere.');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(7000);

        await driver.findElement(By.xpath('//input')).sendKeys('Hail to the Prophet, ascended to heaven!');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(5300);

        await driver.findElement(By.xpath('//input')).sendKeys('Traitors and tyrants now fight him in vain.');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(7500);

        await driver.findElement(By.xpath('//input')).sendKeys('Mingling with Gods, he can plan for his brethren;');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(5000);

        await driver.findElement(By.xpath('//input')).sendKeys('Death cannot conquer the hero again.');

        await driver.findElement(By.xpath('//button')).click();

        await driver.sleep(5000);

        const movie = await driver.findElement(By.xpath('//li'));

        const displayed = movie.isDisplayed();

        expect(displayed).toBeTruthy();
    }
}