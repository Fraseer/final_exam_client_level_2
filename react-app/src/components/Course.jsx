import React from 'react'
import _ from "lodash"

const Course = ({course}) => {
  return (
    <body>
    <div data-cy="course-1">
      <h2 data-cy="course-title">{course.title}</h2>
      <p data-cy="course-description">{course.description}</p>
      <p data-cy="course-category">{_.capitalize(course.category)}</p>
      <p data-cy="course-instructors">{course.instructors}</p>
      <p data-cy="course-info">{course.info}</p>
      <p data-cy="course-price">
      {course.price}
      </p>
    </div>
  </body>
  )
}

export default Course
