//loads all pages
//P A S S E D
describe("test that all endpoints load successfully", () => {
  it("visit the homepage", () => {
    cy.visit("http://localhost:3000");
  });
  it("visit gallery", () => {
    cy.visit("http://localhost:3000/gallery");
  });
  it("visit about me page", () => {
    cy.visit("http://localhost:3000/about");
  });
  it("visit blog", () => {
    cy.visit("http://localhost:3000/blog");
  });
  it("visit contact page", () => {
    cy.visit("http://localhost:3000/contact");
  });
});
