import React from 'react';
import Calendar from 'react-calendar';
import { CartState } from '../../../Context/Context';
import './reactcalander.css'

const Calender=()=> {

  const {handleDateChange}=CartState()

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
    </div>
  );
}
export default Calender