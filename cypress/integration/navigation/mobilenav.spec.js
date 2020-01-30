//P A S S E D
describe("MOBILE NAV elements displaying correctly", () => {
  it("visit the homepage", () => {
    cy.visit("http://localhost:3000");
  });

  // P A S S E D
  it("mobile nav menu appears on resize to < 550px", () => {
    cy.viewport(549, 600).then(() => {
      cy.get(".hamburger")
        .should("have.css", "display")
        .and("match", /inline-block/);
    });
  });

  // P A S S E D
  it("movile nav removes header when clicked", () => {
    cy.get(".hamburger")
      .click()
      .then(() => {
        cy.get(".header").should("be.hidden");
      });
  });

  // P A S S E D
  it("mobile nav drops down links on click", () => {
    cy.viewport(549, 600).then(() => {
      cy.get(".hamburger")
        .click()
        .get(".pages")
        .should("have.css", "display")
        .and("match", /block/);
    });
  });
});
