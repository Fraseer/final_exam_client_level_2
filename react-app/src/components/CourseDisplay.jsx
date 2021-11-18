import React, { useEffect } from "react";
import { courses } from "../data/courses";
import Course from "./Course";

const CourseDisplay = () => {
  let courseList = courses.map((course) => {
    return <Course course={course} key={course.title} />;
  });

  return <div data-cy="courses">{courseList}</div>;
};

export default CourseDisplay;
