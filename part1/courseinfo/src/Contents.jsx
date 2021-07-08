const Part = (props) =>{
  return(
    <p>
     {props.contents} {props.newest}
    </p >
  )
}

const Contents = (props) => {
  return (
    <>
      <Part contents={props.name1} newest={props.firstExercise} />
      <Part contents={props.name2} newest={props.secondExercise} />
      <Part contents={props.name3} newest={props.thirdExercise} />
      
      </>
  )
}

export default Contents