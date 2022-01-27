import React from 'react'
import './appointmentpage.css'

import Navigationbar from '../../Home/Navbar/Navigationbar'
import Footer from '../../Footer/Footer'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment'

const Appointmentpage = () => {
    return (
        <div className='container-fluid  h-100'>
         <Navigationbar />
         <AppointmentHeader />
         <AvailableAppointment />
         <Footer />
       
            
        </div>
    )
}

export default Appointmentpage
