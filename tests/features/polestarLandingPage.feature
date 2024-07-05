Feature: To validate developer portal
   Scenario: To validate polestar home page
      Given I launch polestar developer portal
      When I click on accept cookie button in home page
      Then I verify the polestar img on home page