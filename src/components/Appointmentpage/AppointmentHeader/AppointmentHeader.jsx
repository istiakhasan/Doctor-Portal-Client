import React from 'react'
import Chair from '../../../images/chair.png'
import Calender from '../Calender/Calender'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = () => {
    return (
        <main style={{height:"700px",display:"flex",justifyContent:"center",alignItems:"center"}} className='row appointment-container h-100'>
           
        <div className="col-md-4 m-auto d-inline-block">
            <h1 className='mt-5 pt-5' style={{color:"#3A4256"}}>Appointment</h1>
            <Calender />
           

        </div>
        <div className="col-md-5 d-none d-md-block">
            <img src={Chair} alt="" className="img-fluid" />
        </div>
        
    </main>
    
    )
}

export default AppointmentHeader
