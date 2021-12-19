import React from 'react'
import './Appoinment.css'
import Doctor from '../../../images/doctor.png'

const Appoinment = () => {
    return (
        <section className="appoinment mt-5 pt-5 mb-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12  d-sm-none d-md-block  d-none"  >
                        <div >

                        <img className="appointmentimg" src={Doctor} alt="" />
                        </div>

                    </div>
                    <div className="col-md-7 col-sm-12 text-white">
                        <h5 style={{color:"#579099",textTransform:"uppercase"}}>Appointment</h5>
                        <h1 className='my-3' style={{color:"#FFFFFF"}}>Make an appointment Today</h1>
                        <p className='mt-3 mb-3' style={{fontSize:"20px"}}>It is a long estoblished fact that a reader will be distractedby the readable content of a page when looking at its.</p>
                        <button style={{background:"#17D1BF",fontWeight:"bold",color:"white",padding:"10px",width:"25%",border:"none",outline:"none",borderRadius:"5px"}} className=' mt-5'>Learn More</button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Appoinment
