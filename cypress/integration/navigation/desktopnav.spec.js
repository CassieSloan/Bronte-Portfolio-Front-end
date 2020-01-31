// P A S S E D
describe("testing that desktop nav links work for routing", () => {
  it("click nav link and check new url returns", () => {
    cy.visit("http://localhost:3000")
      .get(".nav-link")
      .click({ multiple: true })
      .url();
  });
});
