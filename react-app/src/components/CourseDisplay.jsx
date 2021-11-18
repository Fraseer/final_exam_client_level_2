import React from "react";

const CourseDisplay = () => {
  return (
    <body>
      <h2>Work The Web</h2>
      <div data-cy="course-1">
        <p data-cy="course-header">Work The Web</p>
        <p data-cy="course-description">Do you want to understand</p>
        <p data-cy="course-category">Workshops</p>
        <p data-cy="course-instructors">Thomas Ochman, Emma-Maria Thalén</p>
        <p data-cy="course-info">up to 1 day on-site.</p>
        <p data-cy="course-price">
          From 1 000 SEK - €100 (Contact us for details)
        </p>
        <p>Workshops</p>
      </div>
    </body>
  );
};

export default CourseDisplay;
