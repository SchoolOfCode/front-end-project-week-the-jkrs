//Checking home page

function HomePage() {
  describe("Checking contents of home screen", () => {
    it("Check for PlusMentor logo", () => {
      cy.get("img").should("have.class", "animate-entrance");
      cy.wait(1500);
    });
    it("Check for Create an account button", () => {
      cy.get("a[href*='/register']")
        .should("have.id", "signUp")
        .contains("Create an account");
      cy.wait(1500);
    });
    it("Check for Log In button", () => {
      cy.get("a[href*='/login']").should("have.id", "logIn").contains("Log in");
      cy.wait(1500);
    });
  });
}

export default HomePage;
