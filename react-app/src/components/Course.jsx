import React from "react";
import _ from "lodash";

const Course = ({ course }) => {
  return (
    <body>
      <div data-cy={`course-${course.id}`}>
        <h2 data-cy="course-title">{course.title}</h2>
        <p data-cy="course-description">{course.description}</p>
        <p data-cy="course-category">
          Category: {_.capitalize(course.category)}
        </p>
        <p data-cy="course-instructors">Instructors: {course.instructors}</p>
        <p data-cy="course-info">{course.info}</p>
        <p data-cy="course-price">Price: {course.price}</p>
      </div>
    </body>
  );
};

export default Course;
