Cypress.Commands.add("containsTheText", (selector: string, text: string) => {
  cy.get(selector).should("be.visible").and("have.text", text);
});

Cypress.Commands.add("isClickable", (selector: string) => {
  cy.get(selector).should("be.visible").click({ force: true });
});

Cypress.Commands.add("isDispleyed", (selector: string) => {
  cy.get(selector)
    .should("be.visible")
    .and("not.be.hidden");
});