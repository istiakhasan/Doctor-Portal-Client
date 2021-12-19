import React from 'react'
import './doctorstyle.css'
import { DoctorData } from '../../../Data/Data'
import {faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Doctor = () => {
    return (
        <section className="doctorSection mt-5 pt-5 ">
              <div className='text-center mb-5'>
                <h4 style={{color:"#70CDCD"}}>OUR DOCTORS</h4>
             </div>
             <div className="container">
                 <div className="row my-5 pb-5">
                     {
                         DoctorData.map(doctor=>(
                             <div className="col-md-4 mt-3">
                                 <div style={{  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}} className="card w-75 m-auto    h-100">
                                     <img style={{objectFit:"cover"}} className='card-img-top img-fluid' src={doctor.img} alt="" />
                                     <div className="card-body text-center h-100">
                                         <h6>

                                          <strong>{doctor.name}</strong>
                                         </h6>
                                         <p > <FontAwesomeIcon style={{color:"#11D0E3"}} icon={faPhoneAlt}></FontAwesomeIcon><span className='text-secondary'>{doctor.contact}</span></p>
                                       
                                     </div>
                                 </div>
                             </div>
                         ))
                     }

                 </div>
             </div>
        </section>
    )
}

export default Doctor
