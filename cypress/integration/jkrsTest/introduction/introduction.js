//Check introduction page

function introduction() {
  describe("Check Introduction page", () => {
    it("Check for welcoming message", () => {
      cy.get("h1#introCardTitle").contains(
        "Welcome to plusMentor: The School of Code Mentoring App"
      );
      cy.wait(1500);
    });
    it("Checking title of checklist", () => {
      cy.get("main")
        .find("div")
        .eq(3)
        .should("have.class", "checkListPaper")
        .find("h4")
        .contains(
          "We get it - having your first mentoring session can be nerve-racking!"
        );
      cy.wait(1500);
    });
    it("Checking first item of check list and selecting it", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "checkListPaper")
        .eq(4)
        .find("div")
        .find("label")
        .contains(
          "Prepare a brief introduction about yourself - this can be as formal or as informal as you like"
        );
      cy.wait(1500);
      cy.get("main")
        .find("div")
        .should("have.class", "checkListPaper")
        .eq(4)
        .find("div")
        .find("label")
        .click();
      cy.wait(1500);
    });
    it("Checking second item of check list ", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "checkListPaper")
        .eq(6)
        .find("div")
        .find("label")
        .contains(
          "Background: Describe your career history prior to the School of Code"
        );
      cy.wait(1500);
    });
    it("Checking third item of check list and selecting it", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "checkListPaper")
        .eq(8)
        .find("div")
        .find("label")
        .contains("Describe any relevent experience");
      cy.wait(1500);
      cy.get("main")
        .find("div")
        .should("have.class", "checkListPaper")
        .eq(8)
        .find("div")
        .find("label")
        .click();
      cy.wait(1500);
    });
  });
}

export default introduction;
