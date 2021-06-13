@registration
Feature: Register functionality scenarios

  Scenario Outline: Validate new user can be registered with all details
    Given I launch Application
    And I moved to Registration page
    When I enter "<fn>" "<ln>" "<email>" "<telephone>" "<password>"
    And I select policy
    And I click on continue button
    Then new user "should" be created

    Examples: 
      | fn   | ln       | email | telephone | password |
      | appu | rajkumar | appu  | 805577545 | appu123  |

  Scenario: Validate new user cannot be registered without mandatory inputs
    Given I launch Application
    And I moved to Registration page
    And I select policy
    And I click on continue button
    Then new user "should not" be created
