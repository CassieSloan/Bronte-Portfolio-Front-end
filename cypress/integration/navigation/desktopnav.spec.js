// nav buttons lead to appropriate pages/endpoints
// P A S S E D
describe("testing that desktop nav links work for routing", () => {
  it("testing that desktop nav links work for routing", () => {
    cy.visit("http://localhost:3000")
      .get(".nav-link")
      .click({ multiple: true })
      .url();
  });
});

//social buttons link to socials
// P A S S E D
describe("social links in nav bar link out to socials", () => {
  it("twitter button links to bronte's twitter", () => {
    cy.get("a").url("https://twitter.com/BronteRhian_");
  });
  it("instagram button links to bronte's instagra", () => {
    cy.get("a").url("https://www.instagram.com/redshirtwalking/");
  });
});
