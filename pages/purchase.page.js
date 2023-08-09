const { expect } = require('@playwright/test');
exports.PurchasePage =class PurchasePage{
    constructor(page){
        this.page = page;
        this.chooseYourPlanTitle = page.locator('.title:has-text("Choose your plan")');
        this.continueAsFree = page.locator('span:has-text("Continue as FREE")');
        
    }
    //Robotic functions
    
    async clickOnContinueAsFreeButton(){
        await this.continueAsFree.click();
    }

    //Assertion functions

    async AssertChooseYourPlanModalDisplays(){
     await expect(this.chooseYourPlanTitle).toHaveText("Choose your plan");
    }

}