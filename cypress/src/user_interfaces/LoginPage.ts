export default class LoginPage {
  static usernameInput = (): string => {
    return "[data-test='username']";
  };
  static passwordInput = (): string => {
    return "[data-test='password']";
  };
  static loginButton = (): string => {
    return "[data-test='login-button']";
  };
  static errorModal = () => {
    return "[data-test='error']";
  };  
}



