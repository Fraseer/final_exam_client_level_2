import React from "react";
import { courses } from "../data/courses";
import Course from "./Course";

const CourseDisplay = (displayedCategory) => {
  debugger
  let courseList = courses
  .filter((course) => course.category === displayedCategory)
  .map((course) => {
      return <Course course={course} key={course.id} />;
    });

  return <div data-cy="courses">{courseList}</div>;
};

export default CourseDisplay;
