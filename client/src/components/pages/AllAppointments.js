import React, { useContext, useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import { userContext } from "../../App";
// import { useNavigate } from "react-router-dom";
import { ModalUpdate }  from "../modal";

const AllAppointments = () => {
  let { user } = useContext(userContext);
  const [appointments, setAppointments] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const navigate = useNavigate();

  //check if user is logged in
  user = user || {
    id: 19,
    username: "Ian",
    name: "Ian Muriithi",
    role: "Patient"
}
  useEffect(() => {
    fetchAppointments();
  }, []);

  const thPatient = (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Doctor Name</th>
        <th scope="col">Date</th>
        <th scope="col">Status</th>
        <th scope="col">Comments</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );

  const thDoc = (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Patient Name</th>
        <th scope="col">Date</th>
        <th scope="col">Status</th>
        <th scope="col">Comments</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );


  const tableHead = user.role === "Patient" ? thPatient : thDoc;
  const baseUrl =
    user.role === "Patient"
      ? `/patient-appointments/${user.id}`
      : `/doctor-appointments/${user.id}`;

  const fetchAppointments = () => {
    axios({
      method: "get",
      url: baseUrl,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((res) => {
        setAppointments(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        //errors.push("Invalid username or password");
      });
  };

  const tablerows = appointments.map(
    ({ id, status, comments, doctor, patient, appointment_date }, index) => {
      if (user.role === "Patient")
        return (
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{doctor.name}</td>
            <td>{appointment_date}</td>
            <td>{status}</td>
            <td>{comments}</td>
            <td>
              <h3 onClick={() => handleClick(id)}>
                <FaUserEdit />
              </h3>
            </td>
          </tr>
        );

      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>{patient.name}</td>
          <td>{appointment_date}</td>
          <td>{status}</td>
          <td>{comments}</td>
          <td>
            <h3 onClick={() => handleClick(id)} >
              <FaUserEdit />
            </h3>
          </td>
        </tr>
      );
    }
  );
  const handleClick = (selectedId) => {
    handleShow()    
    const selected = appointments.find(({id}) => id === selectedId)
    setSelectedAppointment(selected)

  }

  return (
    <>
      <div className="container-sm">
        <div className="row justify-content-start">
          <div className="row justify-content-center">
            <div className="col-6">
              {user.role ? `All Apointments ${user.role}` : "Please login"}
            </div>
            <div className="col-8">
              <table className="table">
                {tableHead}
                <tbody>{tablerows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ModalUpdate show={show} handleClose={handleClose} currentUser={user} selectedAppointment={selectedAppointment}/>
    </>
  );
};

export default AllAppointments;
