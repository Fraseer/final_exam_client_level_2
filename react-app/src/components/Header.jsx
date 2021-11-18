import React from "react";
import { courses } from "../data/courses";
import _ from "lodash"

const Header = () => {
  let categories = courses.map((course) => {
    return <li data-cy={`category-${course.id}`} >{_.capitalize(course.category)}</li>
  })

  return (
    <>
      <h1 data-cy="site-title" className="center">COURSE LIST</h1>
      <ul data-cy="categories" className="center">
        {categories}
      </ul>
    </>
  );
};

export default Header;
