import Part from "./Part";

const Content = ({ parts }) => {
  console.log("Content:", parts);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
