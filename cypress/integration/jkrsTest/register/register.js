//Create account

function register() {
  describe("Creating an account", () => {
    it("Click Create an account button", () => {
      cy.get("a[href*='/register']")
        .should("have.id", "signUp")
        .contains("Create an account")
        .click();
      cy.wait(1500);
    });
    it("Check for Create an account heading", () => {
      cy.get("h3")
        .should("have.id", "signInTitle")
        .contains("Create an account");
      cy.wait(1500);
    });
    it("Check for email input field and type email in", () => {
      cy.get("form")
        .find("label")
        .eq(0)
        .contains("Your Email:")
        .find("input[name=email]")
        .type("cypresstest@gmail.com");
      cy.wait(1500);
    });
    it("Check for First Name input field and type first name in", () => {
      cy.get("form")
        .find("label")
        .eq(1)
        .contains("First Name:")
        .find("input[name=first_name]")
        .type("Cypress");
      cy.wait(1500);
    });
    it("Check for Last Name input field and type Last name in", () => {
      cy.get("form")
        .find("label")
        .eq(2)
        .contains("Last Name:")
        .find("input[name=last_name]")
        .type("Test");
      cy.wait(1500);
    });
    it("Check for Password input field and type password in", () => {
      cy.get("form")
        .find("label")
        .eq(3)
        .contains("Password:")
        .find("input[name=password]")
        .type("cypresstest");
      cy.wait(1500);
    });
    it("Check for Role radio buttons mentor and bootcamper", () => {
      cy.get("form").find("label").eq(4).contains("Role:");
      cy.get("form")
        .find("div")
        .should("have.class", "control")
        .find("label")
        .eq(0)
        .contains("Mentor")
        .find("input[name=role]");
      cy.get("form")
        .find("div")
        .should("have.class", "control")
        .find("label")
        .eq(1)
        .contains("Bootcamper")
        .find("input[name=role]");
      cy.wait(1500);
    });
    it("Select radio button for mentor role", () => {
      cy.get("form")
        .find("div")
        .should("have.class", "control")
        .find("label")
        .eq(0)
        .contains("Mentor")
        .find("input[name=role]")
        .click();
      cy.wait(1500);
    });
    it("Check for register button and click it", () => {
      cy.get("form")
        .find("div")
        .should("have.class", "formButtonsContainer")
        .find("button")
        .should("have.id", "nextButton")
        .contains("Register")
        .click();
      cy.wait(1500);
    });
    it("Check for back button and click it", () => {
      cy.get("form")
        .find("div")
        .should("have.class", "formButtonsContainer")
        .find("a")
        .should("have.id", "backButton")
        .contains("Back")
        .click();
      cy.wait(1500);
    });
  });
}

export default register;
