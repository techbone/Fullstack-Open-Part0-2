import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import Contents from "./components/Contents.jsx";
const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const handleBadClick = () => setBad(bad + 1);
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const allFeedBacks = good + bad + neutral;
  const newArr = [good, neutral, bad];
  const average = newArr.reduce((acc, curr) => acc + curr, 0) / newArr.length;
  let positive =
    good === 0
      ? 0
      : (good * 100) / newArr.reduce((acc, curr) => acc + curr, 0) + "%";
  return (
    <div>
      <Header name="Give Feedback" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Header name="Statistics" />
      {!(good || bad || neutral) ? (
        <span>No feedback Given yet</span>
      ) : (
        <div>
          <Contents name="Good" count={good} />
          <Contents name="Neutral" count={neutral} />
          <Contents name="Bad" count={bad} />
          <Contents name="All" count={allFeedBacks} />
          <Contents name="Average" count={average} />
          <Contents name="Positive" count={positive} />
        </div>
      )}
    </div>
  );
};

export default App;
