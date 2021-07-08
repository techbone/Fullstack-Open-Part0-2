const Total = (props) => {
 return (
    <>
       Number of exercises{" "}
    {props.parts.reduce((acc, cur) => acc + cur.exercises, 0)}
      </>
  )
}

export default Total