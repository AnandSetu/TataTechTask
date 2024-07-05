
const launchApp = async(url) => {
    await browser.url(url);
    await browser.maximizeWindow();
}

const isDisplay = async(locator) => {
    let elem = await $(locator);
    let isDisplayed = await elem.isDisplayed();
    console.log(isDisplayed);
}

const click = async(locator) => {
    await $(locator).click();
}

const verifyAndValidateElementCopy = async(locator,text) => {
    let actual = await $(locator);
    await expect(actual).toHaveText(text);
}

module.exports = {
    launchApp,
    isDisplay,
    click,
    verifyAndValidateElementCopy
}
