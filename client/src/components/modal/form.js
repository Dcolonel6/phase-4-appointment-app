import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
//import { userContext } from "../../App";

const Form = ({
  currentUser,
  selectedAppointment,
  handleClose,
  update,
  setAlertHandler,
}) => {
  const { patient, doctor, id, appointment_date, status, comments } =
    selectedAppointment;
  let name = "Patient Name",
    nameValue = selectedAppointment.patient.name;
  const [formData, setFormData] = useState({
    name:
      currentUser.role === "Patient"
        ? selectedAppointment.patient.name
        : selectedAppointment.doctor.name,
    comment: comments,
    appointment_date: appointment_date,
    status: status,
    id: selectedAppointment.id,
  });

  if (currentUser.role === "Patient") {
    name = "Doctor Name";
    nameValue = selectedAppointment.doctor.name;
  }

  const onChangeHandler = (evnt) => {
    const { target } = evnt;
    setFormData((currentState) => {
      return {
        ...currentState,
        [target.name]: target.value,
      };
    });
  };

  const updateAppointments = (data, id) => {
    
    axios
      .patch(`/appointments/${id}`, data)
      .then((res) => {
        update(res.data);
        setAlertHandler(true,"success")
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        setAlertHandler(true,"danger")
        //errors.push("Invalid username or password");
      });
  };

  const onClose = () => {
    const data = {
      comments: formData.comment,
      appointment_date: formData.appointment_date,
      status: formData.status,
      patient_id: selectedAppointment.patient.id,
      doctor_id: selectedAppointment.doctor.id,
    };
    handleClose();
    updateAppointments(data, formData.id);
  };

  return (
    <form>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="name">{name}</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={onChangeHandler}
            value={nameValue}
            disabled
          />
        </div>
        <label htmlFor="appointment_date">Appointment Date</label>
        <input
          type="datetime-local"
          className="form-control"
          name="appointment_date"
          onChange={onChangeHandler}
          value={formData.appointment_date}
          id="appointment_date"
          disabled={currentUser.role === "Doctor"}
        />
      </div>
      <div className="form-group">
        <div className="form-floating">
          <select
            className="form-select"
            id="status"
            name="status"
            onChange={onChangeHandler}
            value={formData.status}
            disabled={currentUser.role === "Patient"}
            aria-label="Floating label select example"
          >
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="Approved">Approved</option>
          </select>
          <label htmlFor="status">Change status of appointment</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="Comment">Comments</label>
        <textarea
          className="form-control"
          disabled={currentUser.role === "Doctor"}
          onChange={onChangeHandler}
          value={formData.comment}
          name="comment"
          id="comment"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={(evnt) => onClose()}>
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default Form;
