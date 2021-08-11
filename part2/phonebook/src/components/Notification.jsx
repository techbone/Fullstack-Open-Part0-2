const Notification = ({ message }) => {
  const red = {
    padding: "0.7rem",
    borderTop: "2px solid lightgreen",
    borderBottom: "2px solid lightgreen",
    bacgroundColor: "grey",
    color: "red",
    marginTop: "1rem",
    fontSize: "1rem",
  };
  const green = {
    bacgroundColor: "grey",
    padding: "0.7rem",
    borderTop: "2px solid green",
    borderBottom: "2px solid green",
    color: "green",
    marginTop: "1rem",
    fontSize: "1rem",
  };
  if (!message) return null;
  return <div style={message.includes("added") ? green : red}>{message}</div>;
};
export default Notification;
