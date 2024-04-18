/* eslint-disable react/prop-types */
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
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
      <Part part={props.part[0]} exercise={props.exercises[0]}/>
      <Part part={props.part[1]} exercise={props.exercises[1]}/>
      <Part part={props.part[2]} exercise={props.exercises[2]}/>
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
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total} </p>
    </div>
  );
};

export default App;
