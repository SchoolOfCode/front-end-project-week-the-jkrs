//Check talking points page

function talkingPoints() {
  describe("Check Talking Points page", () => {
    it("Navigating to page", () => {
      cy.get("header")
        .should("have.class", "App-header")
        .find("nav")
        .find("a[href*='/GetTip']")
        .contains("Talking Points")
        .click();
      cy.wait(1500);
    });
    it("Check for welcoming message", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "tile animate-entrance")
        .eq(0)
        .find("div")
        .should("have.class", "tile is-parent")
        .find("div")
        .should("have.class", "content tile is-child box")
        .find("div")
        .should("have.class", "card")
        .find("header")
        .should("have.class", "card-header")
        .find("p")
        .should("have.class", "card-header-title")
        .contains("Talking point ideas");
      cy.wait(1500);
    });
    it("Check tip placeholder text", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "tile animate-entrance")
        .eq(0)
        .find("div")
        .should("have.class", "tile is-parent")
        .find("div")
        .should("have.class", "content tile is-child box")
        .find("div")
        .should("have.class", "card")
        .find("div")
        .should("have.class", "card-content")
        .find("div")
        .should("have.class", "content")
        .contains(
          'Click the "Get talking point" button to get inspiration for what to talk to your mentor about!'
        );
      cy.wait(1500);
    });
    it("Click talking point button", () => {
      cy.get("main")
        .find("div")
        .eq(6)
        .find("button")
        .should("have.class", "button is-primary is-large")
        .contains("Get Talking Point")
        .click();
      cy.wait(1500);
    });
    it("Check if placeholder text has changed", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "tile animate-entrance")
        .eq(0)
        .find("div")
        .should("have.class", "tile is-parent")
        .find("div")
        .should("have.class", "content tile is-child box")
        .find("div")
        .should("have.class", "card")
        .find("div")
        .should("have.class", "card-content")
        .find("div")
        .should("have.class", "content")
        .should("have.value", "");
      cy.wait(1500);
    });
    it("Click talking point button", () => {
      cy.get("main")
        .find("div")
        .eq(6)
        .find("button")
        .should("have.class", "button is-primary is-large")
        .contains("Get Talking Point")
        .click();
      cy.wait(1500);
    });
    it("Check if placeholder text has changed", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "tile animate-entrance")
        .eq(0)
        .find("div")
        .should("have.class", "tile is-parent")
        .find("div")
        .should("have.class", "content tile is-child box")
        .find("div")
        .should("have.class", "card")
        .find("div")
        .should("have.class", "card-content")
        .find("div")
        .should("have.class", "content")
        .should("have.value", "");
      cy.wait(1500);
    });
  });
}

export default talkingPoints;
