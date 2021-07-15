import React, { useState } from 'react'
import Button from "./components/Button"

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(7).fill(0))

  const handleSelectedClick = () => setSelected(selected < anecdotes.length - 1 ? selected + 1 : 0)
  
  const handleVoteClick = () => {
    const newVote = [...allVotes]
    newVote[selected] += 1
    setAllVotes(newVote)
  }
  
  const highestVote = Math.max(...allVotes)
  const indexOfhighestVote = allVotes.indexOf(highestVote)

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      {anecdotes[selected]}
      <br />
      <div>has {allVotes[selected]} vote</div>
      <br />
      <Button text='next anecdote' handleClick={handleSelectedClick} />
      <Button text='vote' handleClick={handleVoteClick} />
      <h1>Anecdote with the most count:</h1>
      <>
        {
          highestVote === 0
            ?
            <span>No votes have been taken yet</span>
            :
            <>
              <p>{anecdotes[indexOfhighestVote]}</p>
              <span>has {highestVote} vote</span>
              </>
        }
        </>
      </div>
  )
}

export default App