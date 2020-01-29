//test that homepage/index loads

describe("test that the homepage loads", () => {
  it("visit the homepage", () => {
    cy.visit("http://localhost:3000");
  });
});
