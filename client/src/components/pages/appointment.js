import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import axios from "axios";


import { userContext } from '../../App';
import Doctor from './doctor'
import AlertBox from '../alerts';

//https://react-day-time-picker.netlify.app/ documentation


const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState({});
  const [hasSelected,setHasSelected] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const [isDone,setIsDone] = useState(false)
  const [error, setError] = useState("")
  const [show, setShow] = useState(false);

  const { user } = useContext(userContext);
  const navigate = useNavigate()
 

  useEffect(() => {
    fetch("/doctors")
      .then((resp) => resp.json())
      .then((data) => setDoctors(data));
  }, []);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const makeAppointment = async(payload) => {
    await axios({
			method: "post",
			url: `/appointments`,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			},
			data: payload,
		})
			.then((res) => {
        setIsLoading(false)
        setIsDone(true)
				// console.log(res.data);
				// navigate("/appointments");
			})
			.catch((err) => {
        setIsLoading(false)
        setIsDone(true)
				console.log(err);
        setError(err)
				//errors.push("Invalid username or password");
			});
  }

  const handleOnSelect = (selectedDocId) => {   
     
    const numDocId = Number(selectedDocId)
    if(numDocId){
      const doc = doctors.find(({id}) => id === numDocId)
      setHasSelected(true)
      if(doc){        
        setSelectedDoc(doc)
      }else{
        setSelectedDoc({})
      }
    }else { 
      setHasSelected(false) 
    }   
    
  }


  const handleScheduled = (dateTime) => { 
    setIsLoading(true)
    makeAppointment({
      doctor_id: selectedDoc.id,
      patient_id: user.id,
      comments: "i have a headache",
      appointment_date: dateTime
    })
    
  };
  const content = user.role === "Patient"?  (<>
    < Doctor doctors={doctors} setSelectd={handleOnSelect} />
    {hasSelected && <DayTimePicker timeSlotSizeMinutes={60} err={error} onConfirm ={handleScheduled} isLoading={isLoading} isDone={isDone}/>}
  </>) : (<AlertBox variant={"danger"} message={"A doctor cant make appointments"} setShowHandler= {handleClose}/>) 
  return content
   
};

export default Appointments;
