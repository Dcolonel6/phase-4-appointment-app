import React from 'react';
import { useState, useEffect } from 'react';
import Doctor  from '/doctors'

const Doctor = () => {
  cconst[doctorsData, setDoctorsData ] = useState([]) 
  useEffect(()=>{ fetch ('http://localhost:3000/doctors') 
  .then(resp => resp.json())
   .then(data => setDoctorsData(data)) 
  }, []) 
  const doctorsList = doctorData.map(r => {
     return( <Doctor doctor = {r} /> ) }) 
    
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Doctors List</h1>
      {doctorsList}
    </div>
  );
};

export default Doctor;
