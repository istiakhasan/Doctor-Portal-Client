import React, { useState } from 'react'
import Calendar from 'react-calendar'
import Calender from '../../Appointmentpage/Calender/Calender'

const AppointmentDate = ({handleAppointDate}) => {
  
   
    return (
        <section  className='appointmentDate w-75 m-auto'>
            <h4 className='mt-5'>Appointments</h4>
           

            <Calendar
           
        onChange={handleAppointDate}
        value={new Date()}
         />
   
        
            
        </section>
    )
}

export default AppointmentDate
