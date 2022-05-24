Feature: Login on to the page,verify element and logout from the page

  As an user I am going to login onto the webpsite and check for 
  the account names appearing or not and logout from the account.
    Scenario: Login into the application
     Given I navigate to homepage
     When I click on sign in
     And I login with credentials and verify the accounts
     Then logout from the account