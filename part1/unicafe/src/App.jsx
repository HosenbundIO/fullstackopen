import { useState } from "react";

const Statistics = (props) => {
  const total = props.buttonStat[0] + props.buttonStat[1] + props.buttonStat[2];
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  const average = (props.buttonStat[0] * 1 + props.buttonStat[2] * -1) / total;
  const percentage = (props.buttonStat[0] / total) * 100;
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.buttonStat[0]}</p>
      <p>neutral {props.buttonStat[1]}</p>
      <p>bad {props.buttonStat[2]}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {percentage}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics buttonStat={[good, neutral, bad]} />
    </div>
  );
};

export default App;
