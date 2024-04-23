import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(Array(anecdotes.length).fill(0));

  const handleVotesClick = () => {
    const copyVotes = [...voted];
    copyVotes[selected] += 1;
    setVoted(copyVotes);
  };

  const handleNextAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const highestVoted = Math.max(...voted);
  const indexOfHighestVoted = voted.indexOf(highestVoted);

  return (
    <div>
      <Anecdote
        anecdote={anecdotes[selected]}
        votes={voted[selected]}
        text="of the day"
      />
      <Button handleClick={handleVotesClick} text="vote" />
      <Button handleClick={handleNextAnecdoteClick} text="next anecdote" />
      <Anecdote
        anecdote={anecdotes[indexOfHighestVoted]}
        votes={voted[indexOfHighestVoted]}
        text="with most votes"
      />
    </div>
  );
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Anecdote = (props) => {
  return (
    <div>
      <h1>Anecdote {props.text}</h1>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
    </div>
  );
};


export default App;
