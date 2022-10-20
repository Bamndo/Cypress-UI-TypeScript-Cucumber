/* eslint-disable @typescript-eslint/no-namespace */
import "./tasks/login";
import "./commands/common";
import "cypress-cucumber-tagging/src/support"

declare global {
  namespace Cypress {
    interface Chainable {
      containsTheText(selector: string, text: string): void;
      isClickable(selector: string): void;
      loginAs(user: string, password: string): void;
      isDispleyed(selector: string): void;
    }
  }
}
