const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, clickMovie, deleteMovie, unClickedMovie} = require('../funtions/functions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5502/movieList/index.html')
})
afterAll(async () => {
    await driver.quit()
})
describe('movie tests', () => {
    test('this is a test', async () => {
        await addMovie(driver)
        await driver.sleep(3000)
    })
    test('check if movie is clicked', async () => {

        await clickMovie(driver)
        await driver.sleep(2000)
    })
    test('see if it unclick func works', async () => {
        await unClickedMovie(driver)
        await driver.sleep(2000)
    })
    test('check if it delete movie works', async () => {
        await deleteMovie(driver)
        await driver.sleep(2000)
    })
})
