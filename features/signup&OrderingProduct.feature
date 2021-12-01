Feature: Account Creation and Ordering Product in AutomationPractice App
    Scenario: Testing Account creation and adding product to Cart in AutomationPractice App
        Given This is the Home Page of MyStore
        When I Click on Sign in button
        When I enter email and click on create account button
        Then I should see page header text as "YOUR PERSONAL INFORMATION"
        When I enter the data in all fields and click register button
        Then I should navigate and see header as "MY ACCOUNT"
        When I click on women section button and add the product to cart
        Then I should see message "Product successfully added to your shopping cart"
        When I click on Proceed to CheckoutButton
        Then I should see the header text as "SHOPPING-CART SUMMARY"
        When I click on checkout button
        Then I navigate to Addresses Page and see "ADDRESSES"
        When I clink on proceedToCheckOut button
        Then I navigate to next page and validate "SHIPPING"
        When I select the check box and proceed to check out
        Then I should be navigated and validate "PLEASE CHOOSE YOUR PAYMENT METHOD"
        When I click on the payment and confirm order
        Then I navigate and see the details "ORDER CONFIRMATION"