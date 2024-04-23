import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  console.log("Course:", courses);

  return (
    <div>
      <Header name={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </div>
  );
};

export default Course;
