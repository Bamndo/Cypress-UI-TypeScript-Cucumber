@login
Feature: Login to the website

    As a user of the page
    I want to login
    So check that you login correctly or not


    Scenario Outline: Successful user login
        Given the user is on the saucedemo login page
        When the user login with '<role>' and '<credential>'
        Then the user sees '<message>' is displayed on the screen

        Examples:
            | role            | credential   | message                                                                   |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
            | not_registered  | secret_sauce | Epic sadface: Username and password do not match any user in this service |

    @smoke
    Scenario Outline: Incorrect user login
        Given the user is on the saucedemo login page
        When the user login with '<role>' and '<credential>'
        Then the user verify '<message>' is displayed on the screen

        Examples:
            | role          | credential   | message  |
            | standard_user | secret_sauce | Products |
            | problem_user  | secret_sauce | Products |