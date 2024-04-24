const Notification = ({ message }) => {
  console.log("Notification message: ", message);
  const notificationStyleSuccess = {
    color: "green",
    background: "lightgrey",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: "5",
    padding: "10",
    marginBottom: "10",
  };
  const notificationStyleError = {
    color: "red",
    background: "lightgrey",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: "5",
    padding: "10",
    marginBottom: "10",
  };
  if (message === null) {
    return null;
  }
  if (message.type == "error") {
    return (
      <div style={notificationStyleError}>
        <br />
        {message.text}
        <br />
      </div>
    );
  }
  return (
    <div style={notificationStyleSuccess}>
      <br />
      {message.text}
      <br />
    </div>
  );
};

export default Notification;
