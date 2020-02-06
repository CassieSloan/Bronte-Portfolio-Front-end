//GALLERY page tests
describe("ensure gallery 'genre' boxes create correct endpoints in route", () => {
  it("click each box and see url change", () => {
    cy.visit("http://localhost:3000/gallery")
      .get(".genre-box")
      .click({ multiple: true })
      .url();
  });
});
