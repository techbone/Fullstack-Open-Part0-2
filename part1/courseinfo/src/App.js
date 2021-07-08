import React from 'react'
import Header from './Header'
import Contents from './Contents'
import Footer   from './Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Contents
        name1={part1} firstExercise={exercises1}
        name2={part2} secondExercise={exercises2}
        name3={part3} thirdExercise={exercises3}
      />
      <Footer
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App