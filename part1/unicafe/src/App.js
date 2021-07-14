import React, { useState } from "react";
import Header from "./components/Header.jsx"
import Button from "./components/Button.jsx"
import Contents from "./components/Contents.jsx";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handlebadClick = () => setBad(bad + 1);
  const allFeedbacks = bad + neutral + good;
  const newArr = [bad, good, neutral];
  const average = newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length;
  let positive =
    good === 0
      ? 0
      : (good * 100) / newArr.reduce((acc, curr) => acc + curr, 0) + "%";
  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handlebadClick} text="Bad" />
      <Header header="statistics" />
      {!(good || bad || neutral) ? (
        <span>No feedback Given yet</span>
      ) : (
        <div>
          <Contents name="Good" count={good} />
          <Contents name="Neutral" count={neutral} />
          <Contents name="Bad" count={bad} />
          <Contents name="all" count={allFeedbacks} />
          <Contents name="Average" count={average} />
          <Contents name="Positive" count={positive} />
        </div>
      )}
    </div>
  );
};
export default App;