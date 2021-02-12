//getting to the opening screen

function openingScreen() {
  describe("Getting to opening screen", () => {
    it("Show PlusMentor home page of app", () => {
      cy.visit("https://plusmentor.netlify.app/");
      cy.wait(1500);
    });
  });
}

export default openingScreen;
