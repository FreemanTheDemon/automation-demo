const {By} = require('selenium-webdriver');

const verifyMovie = async (driver) => {
    const movie = 'Example Movie';

    await driver.findElement(By.css('input')).sendKeys(movie);
    
    await driver.findElement(By.css('button')).click();

    const movieText = await driver.findElement(By.xpath('//li/span')).getText();

    expect(movieText).toBe(movie);
}

module.exports = {
    verifyMovie
};