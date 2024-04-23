import Part from "./Part";

const Content = ({ course }) => {
  console.log("Content:", course);

  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
