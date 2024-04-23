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
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.buttonStat[0]} />
          <StatisticsLine text="neutral" value={props.buttonStat[1]} />
          <StatisticsLine text="bad" value={props.buttonStat[2]} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={`${percentage}%`} />
        </tbody>
      </table>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = (props) => {
  return (
      <button onClick={props.handleClick}>{props.text}</button>
  )
}

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
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Statistics buttonStat={[good, neutral, bad]} />
    </div>
  );
};



export default App;
