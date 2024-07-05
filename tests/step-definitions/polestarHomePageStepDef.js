const { Given, When, Then } = require('@wdio/cucumber-framework');

const { environment } = require('../../config/environment.js');
const common = require('../utility/common.js');
const { locators } = require('../locatore/polestarHomePageLocator.js');
const { commonCopy } = require('../copy/polestarHomePageCopy.js');

Given(/^I launch polestar developer portal$/, async () => {
    let url = environment.local.localUrl;
    console.log("App url :", url);
    await common.launchApp(url);
});

When(/^I verify the polestar img on home page$/, async () => {
    await common.isDisplay(locators.polestar_img);
});

Then(/^I click on accept cookie button in home page$/, async () => {
    await common.click(locators.cookie);
});

Then(/^I click on upptack button in home page$/, async () => {
    await common.click(locators.upptack_btn);
});

Then(/^I click on provkorning button$/, async () => {
    await common.click(locators.provkorning_button);
});

Then(/^I verify Boka en provkorning label$/, async () => {
    await common.verifyAndValidateElementCopy(locators.boka_en_provkorning_label , commonCopy.boka_en_provkorning_label);
});

Then(/^I verify Valj bil, plats och label$/, async () => {
    await common.verifyAndValidateElementCopy(locators.valj_bil_plats_label , commonCopy.valj_bil_plats_label);
});

Then(/^I verify Valj mellan hos oss label$/, async () => {
    await common.verifyAndValidateElementCopy(locators.valj_mellan_hos_label, commonCopy.valj_mellan_hos_label);
});
