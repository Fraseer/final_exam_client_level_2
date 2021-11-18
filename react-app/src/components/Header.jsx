import React from "react";
import { courses } from "../data/courses";
import _ from "lodash";

const Header = ({ setDisplayedCategory }) => {
  let categories = courses.map((course) => {
    return (
      <li
        data-cy={`category-${course.id}`}
        onClick={setDisplayedCategory(course.category)}
      >
        {_.capitalize(course.category)}
      </li>
    );
  });

  return (
    <>
      <h1 data-cy="site-title" className="header">
        COURSE LIST
      </h1>
      <ul data-cy="categories" className="header">
        {categories}
      </ul>
    </>
  );
};

export default Header;
