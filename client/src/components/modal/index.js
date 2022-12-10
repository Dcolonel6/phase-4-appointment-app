import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Form from "./form";

export const ModalUpdate = ({ show, handleClose, currentUser, selectedAppointment }) => {

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form currentUser={currentUser} selectedAppointment={selectedAppointment} handleClose={handleClose}/>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};
