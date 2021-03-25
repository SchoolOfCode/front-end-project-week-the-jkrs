//Create account

function register(email, firstName, lastName, password) {
  describe("Creating an account", () => {
    it("Click Create an account button", () => {
      cy.get("a[href*='/register']")
        .should("have.id", "signUp")
        .contains("Create an account")
        .click();
      cy.wait(1500);
    });
    it("Check for Create an account heading", () => {
      cy.get("h3#signInTitle").contains("Create an account");
      cy.wait(1500);
    });
    it("Check for email input field and type email in", () => {
      cy.get("form")
        .find("label")
        .eq(0)
        .contains("Your Email:")
        .find("input[name=email]")
        .type(email);
      cy.wait(1500);
    });
    it("Check for First Name input field and type first name in", () => {
      cy.get("form")
        .find("label")
        .eq(1)
        .contains("First Name:")
        .find("input[name=first_name]")
        .type(firstName);
      cy.wait(1500);
    });
    it("Check for Last Name input field and type Last name in", () => {
      cy.get("form")
        .find("label")
        .eq(2)
        .contains("Last Name:")
        .find("input[name=last_name]")
        .type(lastName);
      cy.wait(1500);
    });
    it("Check for Password input field and type password in", () => {
      cy.get("form")
        .find("label")
        .eq(3)
        .contains("Password:")
        .find("input[name=password]")
        .type(password);
      cy.wait(1500);
    });
    it("Check for Role radio buttons Mentor and Bootcamper", () => {
      cy.get("form").find("label").eq(4).contains("Role:");
      cy.get("form")
        .find("div.control")
        .find("label")
        .eq(0)
        .contains("Mentor")
        .find("input[name=role]");
      cy.get("form")
        .find("div.control")
        .find("label")
        .eq(1)
        .contains("Bootcamper")
        .find("input[name=role]");
      cy.wait(1500);
    });
    it("Select radio button for mentor role", () => {
      cy.get("form")
        .find("div.control")
        .find("label")
        .eq(0)
        .contains("Mentor")
        .find("input[name=role]")
        .click();
      cy.wait(1500);
    });
    it("Check for register button and click it", () => {
      cy.get("form")
        .find("div.formButtonsContainer")
        .find("button#nextButton")
        .contains("Register")
        .click();
      cy.wait(1500);
    });
    it("Check for back button and click it", () => {
      cy.get("form")
        .find("div.formButtonsContainer")
        .find("a[href*='/']")
        .should("have.id", "backButton")
        .contains("Back")
        .click();
      cy.wait(1500);
    });
  });
}

export default register;
