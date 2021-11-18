describe("User is shown courses when coming to the site", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected that the site will display the following info about the first course", () => {
    cy.get("[data-cy=course-1]").within(() => {
      cy.get("[data-cy=course-header]").should("contain", "Work The Web");
      cy.get("[data-cy=course-description]").should("include.text", "Do you want to understand");
      cy.get("[data-cy=course-category]").should("contain", "Workshops");
      cy.get("[data-cy=course-instructors]").should("contain", "Thomas Ochman, Emma-Maria Thalén");
      cy.get("[data-cy=course-info]").should("include.text", "up to 1 day on-site.");
      cy.get("[data-cy=course-price]").should("contain", "From 1 000 SEK - €100 (Contact us for details)");
    });
  });
});
