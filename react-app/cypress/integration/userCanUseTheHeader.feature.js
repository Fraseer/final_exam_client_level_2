describe("User can use the header of the site", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected that the header will show the title of the site", () => {
    cy.get("[data-cy=site-title]").should("contain", "COURSE LIST");
  });

  it("is expected to display the categories of the courses", () => {
      cy.get("[data-cy=category-1]").should("contain", "Workshops")
  });
  it('is expected that there will be 7 categories on display', () => {
    cy.get("[data-cy=categories]").children().should("have.length", 7)
  });
});
