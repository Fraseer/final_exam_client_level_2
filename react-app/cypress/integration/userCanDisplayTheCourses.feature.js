describe("User is shown courses when coming to the site", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected that the site will display the following info about the first course", () => {
    cy.get("[data-cy=course-1]").within(() => {
      cy.get("[data-cy=course-title]").should("contain", "Work The Web");
      cy.get("[data-cy=course-description]").should("include.text", "Do you want to understand");
      cy.get("[data-cy=course-category]").should("contain", "Workshops");
      cy.get("[data-cy=course-instructors]").should("contain", "Thomas Ochman, Emma-Maria Thalén");
      cy.get("[data-cy=course-info]").should("include.text", "up to 1 day on-site.");
      cy.get("[data-cy=course-price]").should("contain", "From 1 000 SEK - €100 (Contact us for details)");
    });
  });

  it('is expected that there will be seven courses displayed', () => {
    cy.get("[data-cy=courses]").children().should("have.length", 7)
  });

  it('is expected that clicking on a category in the header will filter to courses of vue', () => {
    cy.get("[data-cy=category-3]").click()
    cy.get("[data-cy=courses]").children().should("have.length", 2)
  });
});
