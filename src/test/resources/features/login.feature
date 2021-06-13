@login
Feature: Login functionality scenarios

  @login @one
  Scenario Outline: Validate Login with valid and invalid credentials
    Given I launch Application
    And I moved to Login page
    When I entered "<username>" and "<password>"
    And I click on Login button
    Then I "<navigate>" to dashboard for "<status>"

    Examples: 
      | username                    | password | status | navigate     |
      | nandeesh.apjkalam@gmail.com | admin    | pass   | navigate     |
      | nandeesh.apjkalam@gmail.com | admin123 | fail   | not navigate |

  @login @two
  Scenario Outline: Validate user cannot able to login without username and/or password
    Given I launch Application
    And I moved to Login page
    When I entered "<username>" and "<password>"
    And I click on Login button
    Then I "<navigate>" to dashboard for "<status>"

    Examples: 
      | username                    | password | status | navigate     |
      |                             | admin    | fail   | not navigate |
      | nandeesh.apjkalam@gmail.com |          | fail   | not navigate |
      |                             |          | fail   | not navigate |

  @login @three
  Scenario Outline: Validate user can able to reset password
    Given I launch Application
    And I moved to Login page
    When I click forgot password link
    And I entered "<username>" mail id
    Then I should get sucess message

    Examples: 
      | username           |
      | nandeesh.apjkalam@gmail.com |
      | nandeesh.apjkalam@gmail.com |
      | nandeesh.apjkalam@gmail.com |
      
