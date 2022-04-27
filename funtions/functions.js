const {By} = require('selenium-webdriver');

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('john wick')

    await driver.findElement(By.xpath('//button')).click()
    
    const movie = await driver.findElement(By.xpath('//li'))
    
    const displayed = movie.isDisplayed();
    
    expect(displayed).toBeTruthy()
}
const clickMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()
    
    const clicked = await driver.findElement(By.className('checked'))


    expect(clicked).toBeTruthy()
}
const unClickedMovie = async (driver) => {

    await driver.findElement(By.xpath('//span')).click()
}
const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath("//*[contains(text(), 'x')]")).click()
    
    const deleted = await driver.findElement(By.xpath("//ul"))


    expect(deleted.hasChildren).toBeFalsy()
}
module.exports = {
    addMovie,
    clickMovie,
    deleteMovie,
    unClickedMovie
}