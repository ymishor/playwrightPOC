const { expect } = require("@playwright/test");

exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator('[aid="header.button.login"]');
    this.joinNowLink = page.locator('[aid="modal.signin.button.signup"]');
    this.emailField = page.locator('[aid="modal.signup.input.email"]');
    this.nameField = page.locator('[aid="modal.signup.input.name"]');
    this.passwordField = page.locator('[aid="modal.signup.input.password"]');
    this.signUpBtn = page.locator('[aid="modal.signup.button.signup"]');
    this.errorMessage = page.locator(".validation-error.left");
    // hello bar elements
    this.discountPopUpCloser = page.locator(
      ".ws-hellobar.is-toast>div.close-btn"
    );
    // Social icons elements
    this.socialsTab = page.locator('[aid="page.editor.signature.tabs.social"]');
    this.facebookField = page.locator(
      '[aid="signature_editor.input.facebook_0"]'
    );
    this.instagramField = page.locator(
      '[aid="signature_editor.input.instagram_1"]'
    );
  }

  // Robotic functions

  async enterEmail(email) {
    await this.emailField.fill(email);
  }

  async enterPassword(password) {
    await this.passwordField.fill(password);
  }

  async enterName(name) {
    await this.nameField.fill(name);
  }

  async loginBtnClick() {
    await this.loginBtn.click();
  }

  async joinNowLinkClick() {
    await this.joinNowLink.click();
  }

  async signUpBtnClick() {
    await this.signUpBtn.click();
  }

  async closeDiscountPopUp() {
    await this.discountPopUpCloser.click();
  }

  async addSocialsIcons() {
    await this.socialsTab.click();
    await this.facebookField.fill("Robot0");
    await this.instagramField.fill("Robot1");
  }

  //Assertions functions
  async validateErrorMessageDisplay() {
    await expect(this.errorMessage).toHaveText("This user already exists");
  }

  async validateTheDiscountPopUpWasClosed() {
    await expect(this.discountPopUpCloser).not.toBeVisible();
  }
};
