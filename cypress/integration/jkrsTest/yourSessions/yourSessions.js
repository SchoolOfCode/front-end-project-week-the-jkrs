//Check Your Sessions page

function yourSessions() {
  describe("Check Your Sessions page", () => {
    it("Navigating to page", () => {
      cy.get("header.App-header")
        .find("nav")
        .find("a[href*='/interaction']")
        .contains("Your sessions")
        .click();
      cy.wait(1500);
    });
    it("Check for topic input field and type topic in", () => {
      cy.get("form")
        .find("label")
        .eq(0)
        .should("have.class", "loginLabel")
        .contains("Topic:")
        .find("input[name=topic]")
        .type("Cypress Testing");
      cy.wait(1500);
    });
    it("Check for discussion input field and type discussion into it", () => {
      cy.get("form")
        .find("label")
        .eq(1)
        .should("have.class", "loginLabel")
        .contains("Discussion:")
        .find("textarea[name=discussion]")
        .type("This is testing the user flow with cypress");
      cy.wait(1500);
    });
    it("Submit discussion card", () => {
      cy.get("form")
        .find("button.button is-primary is-medium")
        .contains("Submit New Card")
        .click();
      cy.wait(1500);
    });
    it("Display all cards", () => {
      cy.get("main")
        .find("button.button is-info is-medium")
        .contains("See All Cards")
        .click();
      cy.wait(1500);
    });
    it("Checking if topic on new card is present", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "displayCardContainer")
        .find("div")
        .eq(0)
        .should("have.class", "singleDisplayCard animate-entrance")
        .find("div")
        .eq(0)
        .should("have.class", "content tile is-child box")
        .find("div")
        .eq(0)
        .should("have.class", "card")
        .find("div")
        .eq(0)
        .should("have.class", "card-content")
        .find("div")
        .eq(0)
        .should("have.class", "content")
        .contains("Cypress Testing")
        .find("h4")
        .contains("Topic:");
      cy.wait(1500);
    });
    it("Checking if discussion on new card is present", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "displayCardContainer")
        .find("div")
        .eq(0)
        .should("have.class", "singleDisplayCard animate-entrance")
        .find("div")
        .eq(0)
        .should("have.class", "content tile is-child box")
        .find("div")
        .eq(0)
        .should("have.class", "card")
        .find("div")
        .eq(2)
        .should("have.class", "card-content")
        .find("div")
        .eq(0)
        .should("have.class", "content")
        .contains("This is testing the user flow with cypress")
        .find("h4")
        .contains("Discussion:");
      cy.wait(1500);
    });
  });
}

export default yourSessions;
