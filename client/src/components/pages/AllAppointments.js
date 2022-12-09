import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../App";

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetchAppointments()
  }, []);

  const thPatient = (
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Doctor Name</th>
        <th scope="col">Date</th>
        <th scope="col">Status</th>
        <th scope="col">Comments</th>
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

  const { user } = useContext(userContext);

  const tableHead = user.role === "Patient" ? thPatient : thDoc;
  const baseUrl = user.role === "Patient" ? `/users/${user.id}` : `/appointments/?id=${user.id}`;

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
        console.log(res.data);
        //navigate("/appointments");
      })
      .catch((err) => {
        console.log(err);
        //errors.push("Invalid username or password");
      });
  };
  return (
    <div className="container-sm">
      <div className="row justify-content-start">
        <div className="row justify-content-center">
          <div className="col-6">All Apointments</div>
          <div className="col-8">
            <table className="table">
              {tableHead}
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>2022-12-12</td>
                  <td>Pending</td>
                  <td>Had a cold</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
