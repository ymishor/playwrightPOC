// @ts-check
const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages/register.page");
const { PurchasePage } = require("../pages/purchase.page");
const { TeaserPage } = require("../pages/teaser.page");
const { Globals } = require("../globals/globals");
test.beforeEach(async ({ page }) => {
  await page.goto(Globals.pageURL);
  await page.locator('[aid="details_rich_fields.anon_overlay"]').click();
});

/* test('Test open the editor and sign up with an existed user validate getting an error message', async ({ page }) => {
 const register = new RegisterPage(page);
 await register.loginBtnClick();
 await register.joinNowLinkClick();
 await register.enterEmail(Globals.existedUserEmail);
 await register.enterName(Globals.existedUserName);
 await register.enterPassword(Globals.existedUserPassword);
 await register.signUpBtnClick();
 await register.validateErrorMessageDisplay();
});

test('Test open the editor and sign up with a new user and validate the user email displays in editor', async ({ page }) => {
  const register = new RegisterPage(page);
  const purchase = new PurchasePage(page);
  const teaser = new TeaserPage(page);
  const globals = new Globals;
  await register.loginBtnClick();
  await register.joinNowLinkClick();
  await register.enterEmail(Globals.newUserEmail);
  await register.enterName(Globals.newUserName);
  await register.enterPassword(Globals.newUserPassword);
  await register.signUpBtnClick();
  await purchase.AssertChooseYourPlanModalDisplays();
  await purchase.clickOnContinueAsFreeButton();

}); */

test("Test open the editor and close the popup discount popup and add some icons", async ({
  page,
}) => {
  const register = new RegisterPage(page);
  await register.closeDiscountPopUp();
  await register.validateTheDiscountPopUpWasClosed();
  await register.addSocialsIcons();
});
