import React, {useState} from "react";
import CourseDisplay from "./components/CourseDisplay";
import Header from "./components/Header";

const App = () => {
  const [displayedCategory, setDisplayedCategory] = useState(null)

  return (
    <>
      <Header setDisplayedCategory={setDisplayedCategory}/>
      <CourseDisplay displayedCategory={displayedCategory}/>;
    </>
  );
};

export default App;
