#To run test case - use this cmd - npx wdio --spec .\tests\features\polestarHomePage.feature
@test
Feature: To validate developer portal
   Scenario: To validate polestar home page
      Given I launch polestar developer portal
      When I click on accept cookie button in home page
      Then I verify the polestar img on home page
      And I click on upptack button in home page
      And I click on provkorning button
      Then I verify Boka en provkorning label
      Then I verify Valj bil, plats och label
      Then I verify Valj mellan hos oss label
