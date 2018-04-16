Feature: Login Module

Scenario: Verify user is able to login with valid credentails
Given If user is on home page
When Navigate to Sign in Page
And Enter user name and password
Then Verify logout link