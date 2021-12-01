import { Given, Then, When } from "@wdio/cucumber-framework";
import randomData from "faker";
import myAccountPage from "../pageobjects/signUp/myAccount.Page";
import addressPage from "../pageobjects/productCart/address.Page";
import shippingPage from "../pageobjects/productCart/shipping.Page";
import shoppingCartPage from "../pageobjects/productCart/shoppingCart.Page";
import womenSectionPage from "../pageobjects/productCart/womenSection.Page";
import signInPage from "../pageobjects/signUp/signIn.Page";
import signUpPage from "../pageobjects/signUp/signUp.Page";
import signUp from "../testData/signUp.json"
import paymentsPage from "../pageobjects/productCart/payments.Page";
import oderConfirmPage from "../pageobjects/productCart/oderConfirm.Page";

Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink();
});

When(/^I Click on Sign in button$/, async () => {
    await signInPage.clickOnSignIn()
});

When(/^I enter email and click on create account button$/, async () => {
    await signInPage.emailAddress.setValue(randomData.internet.email());
    await signInPage.createAccount();
});

Then(/^I should see page header text as \"([^\"]*)\"$/, async (yourpersonalinformation) => {
    await expect(signUpPage.pageHeader).toHaveText(yourpersonalinformation)
});

When(/^I enter the data in all fields and click register button$/, async () => {
    await signUpPage.radioButton();
    await signUpPage.personalInfo(signUp.userName);
    await signUpPage.oneTimePassword(randomData.internet.password(12));
    await signUpPage.dateOfBirth(signUp.dateOfBirth);
    await signUpPage.checkButton();
    await signUpPage.companyName(signUp.company);
    await signUpPage.addressInfo(signUp.address);
    await signUpPage.mobileNumber(signUp.mobileNumber);
    await signUpPage.aliasAddress(signUp.aliasAddress);
    await signUpPage.registerButton();
});

Then(/^I should navigate and see header as \"([^\"]*)\"$/, async (myaccount) => {
    await expect(myAccountPage.myAccountText).toHaveText(myaccount);
});

When(/^I click on women section button and add the product to cart$/, async () => {
    await myAccountPage.womenSection();
    await womenSectionPage.addProductToCart();
});

Then(/^I should see message \"([^\"]*)\"$/, async (productsuccessfullyadded) => {
    await expect(womenSectionPage.productAdded).toHaveText(productsuccessfullyadded);
});

When(/^I click on Proceed to CheckoutButton$/, async () => {
    await womenSectionPage.proceedToCheckOut();
});

Then(/^I should see the header text as \"([^\"]*)\"$/, async (shoppingcart) => {
    await expect(shoppingCartPage.shoppingCartHeader).toHaveTextContaining(shoppingcart)
});

When(/^I click on checkout button$/, async () => {
    await shoppingCartPage.proceedToCheck()
});

Then(/^I navigate to Addresses Page and see \"([^\"]*)\"$/, async (addresses) => {
    await expect(addressPage.addressText).toHaveText(addresses);
});

When(/^I clink on proceedToCheckOut button$/, async () => {
    await addressPage.checkOut();
});

Then(/^I navigate to next page and validate \"([^\"]*)\"$/, async (shipping) => {
    await expect(shippingPage.shippingPageHeader).toHaveText(shipping);
});

When(/^I select the check box and proceed to check out$/, async () => {
    await shippingPage.checkBoxButton();
    await shippingPage.proceedToCheckOut();
});

Then(/^I should be navigated and validate \"([^\"]*)\"$/, async (paymentmethod) => {
    await expect(paymentsPage.paymentHeader).toHaveText(paymentmethod);
});

When(/^I click on the payment and confirm order$/, async () => {
    await paymentsPage.paymentType();
    await oderConfirmPage.confirmOrder();
});

Then(/^I navigate and see the details \"([^\"]*)\"$/, async (orderconfirmation) => {
    await expect(oderConfirmPage.orderConfirmedText).toHaveText(orderconfirmation);
});
