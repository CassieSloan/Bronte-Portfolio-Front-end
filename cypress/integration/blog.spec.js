//BLOG page tests
//P A S S E D
describe("Blog posts are rendered on page", () => {
  it("find container pulling in blog posts", () => {
    cy.visit("http://localhost:3000/blog").get(".blog-post-container");
  });
});
