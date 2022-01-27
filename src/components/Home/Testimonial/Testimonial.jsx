import React, { useState } from 'react'
import './Testimonial.css'
import { testimonialData } from '../../../Data/Data'
import Hangout from '../../../images/hangout.png'

const Testimonial = () => {
    const [patients,setPatients]=useState(testimonialData)
    return (
        <section className='testimonial mt-5 pt-5 container'>
            <div className="row">
                <div className="col-md-6">
                <h5  style={{color:"#579099",textTransform:"uppercase",margin:"0 40px"}}>Testimonial</h5>
              <h1 className='my-4' style={{color:"#1A2B42",lineHeight:"50px",margin:"0 40px"}}>What's Our Paitients <br /> Says</h1>
                </div>
                <div className="col-md-6 text-lg-end d-none d-md-block">
                     <img style={{height:"30vh",opacity:"0.3"}} src={Hangout} alt="" />
                </div>
            </div>
           
            
                <div className="row">
                    {
                        patients.map(pt=>( 
                            <div key={pt.id} className="col-md-4 ">
                                <div style={{  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}} className="card w-75 m-auto mt-5">
                                    <div className="card-body">
                                        <p className="card-text text-secondary">{pt.description}</p>
                                        <div className="pt-5" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                            <img src={pt.img} alt="" />
                                            <div >
                                                <h4 style={{color:"#72CDCD"}} className='card-title'>{pt.name}</h4>
                                                <p className='cart-text text-secondary'>{pt.state}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                  
                </div>
           
            
        </section>
    )
}

export default Testimonial
