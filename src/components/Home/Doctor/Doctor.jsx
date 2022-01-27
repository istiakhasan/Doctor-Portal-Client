import React, { useEffect, useState } from 'react'
import './doctorstyle.css'

import {faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Doctor = () => {
    const [doctors,setDoctor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/doctors')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    console.log(doctors)
    return (
        <section className="doctorSection mt-5 pt-5 ">
              <div className='text-center mb-5'>
                <h4 style={{color:"#70CDCD"}}>OUR DOCTORS</h4>
             </div>
             <div className="container">
                 <div className="row my-5 pb-5">
                     {
                         doctors.map(doctor=>(
                             <div key={doctor.id} className="col-md-4 mt-3">
                                 <div style={{  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}} className="card w-75 m-auto    h-100">
                                    <img src={`data:image/jpeg;base64,${doctor.image.img}`} />
                                     <div className="card-body text-center h-100">
                                         <h6>

                                          <strong>{doctor.name}</strong>
                                         </h6>
                                         <p > <FontAwesomeIcon style={{color:"#11D0E3"}} icon={faPhoneAlt}></FontAwesomeIcon><span className='text-secondary'>{doctor.email}</span></p>
                                       
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
