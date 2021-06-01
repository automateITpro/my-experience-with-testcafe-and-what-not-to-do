@LoginTests
Feature: User login

    Scenario: Login with admin user
        When the admin user logs in
        Then the user should see home page

    @NegativeScenario
    Scenario: Try to login with invalid credentials
        Given the user is in login page
        When the user enters invalid login credentials
          | username | password |
          | User     | 123      |
        Then error message "Invalid credentials" is displayed
