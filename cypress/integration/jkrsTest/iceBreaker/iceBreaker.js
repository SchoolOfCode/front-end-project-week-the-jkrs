//Check ice breaker page

function iceBreaker() {
  describe("Check Ice Breaker page", () => {
    it("Navigating to page", () => {
      cy.get("header")
        .should("have.class", "App-header")
        .find("nav")
        .find("a[href*='/icebreaker']")
        .contains("Icebreaker")
        .click();
    });
    it("Check for welcoming message", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "card animate-entrance")
        .find("header")
        .should("have.class", "card-header")
        .find("h1")
        .should("have.id", "introCardTitle")
        .contains("Here are some ice breakers:");
      cy.get("main")
        .find("div")
        .should("have.class", "card animate-entrance")
        .find("div")
        .should("have.class", "card-content")
        .find("div")
        .should("have.class", "content")
        .find("p")
        .should("have.id", "introCardParagraph")
        .contains(
          "Just incase you find it difficult to reach out and start dialogue (Some serious, some not)"
        );
      cy.wait(1500);
    });
    it("Checking list of professional icebreakers", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "icebreakerPaper animate-entrance")
        .find("h4")
        .contains(
          "Opening the dialogue in a casual way can help with making the communication easier for the rest of the sessions."
        );
      cy.get("main")
        .find("div")
        .eq(4)
        .find("div")
        .eq(0)
        .find("label")
        .contains("What is their job?");
    });
    it("Checking list of personal icebreakers", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "icebreakerPaper animate-entrance")
        .eq(19)
        .find("h4")
        .contains("They are called business hours for a reason.");
      cy.get("main")
        .find("div")
        .should("have.class", "icebreakerPaper animate-entrance")
        .eq(19)
        .find("div")
        .eq(0)
        .find("label")
        .contains(
          "Do they have Hobbies and Passions (Why?) : Sport (play? watch? Support?), Art (artist? piece?), Literature (author? book?)..."
        );
    });
    it("Checking controversional icebreaker (correct answer hate it)", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "icebreakerPaper animate-entrance")
        .eq(34)
        .find("h4")
        .contains("Or go completely controversial: Marmite");
      cy.get("main")
        .find("div")
        .should("have.class", "icebreakerPaper animate-entrance")
        .eq(34)
        .find("div")
        .eq(3)
        .find("label")
        .contains("Hate it");
    });
  });
}

export default iceBreaker;
