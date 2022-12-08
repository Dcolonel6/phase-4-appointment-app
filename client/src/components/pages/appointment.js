import React from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

//https://react-day-time-picker.netlify.app/ documentation


const Appointments = () => {
  const handleScheduled = dateTime => {
    console.log('scheduled: ', dateTime);
  };
  return (
   <DayTimePicker
   timeSlotSizeMinutes={60}
   onConfirm ={handleScheduled}
   />
  );
};

export default Appointments;
