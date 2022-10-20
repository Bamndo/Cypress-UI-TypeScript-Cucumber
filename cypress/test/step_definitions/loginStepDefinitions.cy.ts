import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../src/user_interfaces/InventoryPage";
import LoginPage from "../../src/user_interfaces/LoginPage"

Given("the user is on the saucedemo login page", () => {
  cy.visit("/");
});
When("the user login with {string} and {string}", (role: string, credential: string) => {
  cy.loginAs(role, credential);
});
Then("the user sees {string} is displayed on the screen", (message: string) => {
  cy.log(message);
  cy.containsTheText(LoginPage.errorModal(), message);
});
Then("the user verify {string} is displayed on the screen", (message: string) => {
  cy.log(message);
  cy.containsTheText(InventoryPage.inventoryTitle(), message);
});
