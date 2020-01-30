// nav buttons lead to appropriate pages/endpoints
describe("testing that desktop nav links work for routing", () => {
  it("home button leads to homepage", () => {
    cy.visit("http://localhost:3000")
      .get(".nav-link")
      .click({ multiple: true })
      .url()
      .should("change");
  });
});
