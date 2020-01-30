//GALLERY page tests

//P A S S E D
describe("gallery image divs link to appropriate endpoints", () => {
  it("genre boxes lead to different end points", () => {
    cy.visit("http://localhost:3000/gallery")
      .get(".genre-box")
      .click({ multiple: true })
      .url();
  });
});
