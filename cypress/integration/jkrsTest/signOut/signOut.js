//Sign Out

function signOut() {
  describe("Sign out of app", () => {
    it("Signing out of app", () => {
      cy.get("header.App-header")
        .find("nav")
        .find("a[href*='/']")
        .find("button#signOutButton")
        .contains("Sign Out")
        .click();
      cy.wait(1500);
    });
  });
}

export default signOut;
