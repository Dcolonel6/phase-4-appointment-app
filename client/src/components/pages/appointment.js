import React from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

//https://react-day-time-picker.netlify.app/ documentation


const Appointments = () => {
  return (
   <DayTimePicker
   timeSlotSizeMinutes={60}
   />
  );
};

export default Appointments;
