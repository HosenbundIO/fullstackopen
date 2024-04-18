/* eslint-disable react/prop-types */
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header title={course} />
      <Content
        part={[part1.name, part2.name, part3.name]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} exercise={props.exercises[0]} />
      <Part part={props.part[1]} exercise={props.exercises[1]} />
      <Part part={props.part[2]} exercise={props.exercises[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  );
};

export default App;
