import React from 'react';

import { useState, useEffect } from "react";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import Doctor from './doctor'

//https://react-day-time-picker.netlify.app/ documentation


const Appointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState({});
  const [hasSelected,setHasSelected] = useState(false);
  

  useEffect(() => {
    fetch("/doctors")
      .then((resp) => resp.json())
      .then((data) => setDoctors(data));
  }, []);

  const handleOnSelect = (selectedDocId) => {
    console.log(typeof selectedDocId)
    const numDocId = Number(selectedDocId)
    if(numDocId){
      setHasSelected(true)
    }else {
      debugger;
      const doc = doctors.find(({id}) => id === numDocId)
      //setHasSelected(false)      
      if(doc){
        console.log(doc)
        setSelectedDoc(doc)
      }else{
        setSelectedDoc({})
      }

    }   
    
  }


  const handleScheduled = dateTime => {
    console.log('scheduled: ', dateTime);
  };
  return (
    <>
      < Doctor doctors={doctors} setSelectd={handleOnSelect} />
      {hasSelected && <DayTimePicker timeSlotSizeMinutes={60}  onConfirm ={handleScheduled}  />}
    </>
   
  );
};

export default Appointments;
