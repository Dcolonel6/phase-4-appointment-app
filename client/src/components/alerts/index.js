import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertBox({ variant, message,setShowHandler }) {
  return (
    <Alert variant={variant}  onClose={() => setShowHandler(false,variant)} dismissible>
      {message}
    </Alert>
  );
}

export default AlertBox;
