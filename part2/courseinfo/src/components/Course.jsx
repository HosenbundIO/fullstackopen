import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  console.log("Course:", course);

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

export default Course;
