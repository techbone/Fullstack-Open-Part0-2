const Button = ({ handleShow, text, singleIndex }) => {
  return (
    <>
      <button onClick={() => handleShow(singleIndex)}>{text}</button>
    </>
  );
};

export default Button;
