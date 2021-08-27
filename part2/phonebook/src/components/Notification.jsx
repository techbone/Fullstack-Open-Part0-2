const Notification = ({ message }) => {
  const red = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 10,
    marginBottom: 10,
  };
  const green = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 10,
    marginBottom: 10,
  };
  if (!message) return null;
  return <div style={message.includes("added") ? green : red}>{message}</div>;
};
export default Notification;
