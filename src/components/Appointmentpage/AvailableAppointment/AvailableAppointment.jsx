import React,{useState} from 'react'
import { CartState } from '../../../Context/Context';
import './AvailableAppointment.css'
import { AppointmentData } from '../../../Data/Data';

import AppointBook from '../AppointBook/AppointBook';

const AvailableAppointment = () => {
    const {selectedate}=CartState()
    
    return (
        <section className='available-appointment mt-5 pt-5'>
              <div className='text-center'>
                <h3 style={{color:"#70CDCD"}}>Available Appointments on {selectedate.toDateString()} </h3>
                
            </div>

            <div className="container ">
                <div className="row">
                    {
                        AppointmentData.map(apdt=>(
                         <AppointBook key={apdt.id}  apdt={apdt}/>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}

export default AvailableAppointment
