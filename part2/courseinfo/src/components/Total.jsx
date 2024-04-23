const Total = ({ parts }) => {
  console.log("Total:", parts);
  
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>total of {sum} exercises</p>
    </div>
  );
};

export default Total;
