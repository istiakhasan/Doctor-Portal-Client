import React,{useEffect, useState} from 'react'
import AppointmentDate from '../AppointmentDate/AppointmentDate'
import AppointsLists from '../AppointsLists/AppointsLists'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'
import {CartState} from '../../../Context/Context'


const Dashoard = () => {
    const {loggedInUser}=CartState()
    const [appointData,setAppointDate]=useState(new Date())
    const [allAppintments,setAllAppointments]=useState([])
    const  handleAppointDate=(date)=>{
         setAppointDate(date)
   
      }
      useEffect(()=>{
        fetch('http://localhost:4000/appointDate',{
            method:"POST",
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({date:appointData,email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setAllAppointments(data))
      },[appointData])
  
    return (
        <main className='dashboardContainer'>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
              

               

                <div className="col-md-5">
                    <AppointmentDate handleAppointDate={handleAppointDate} />
                </div>
                <div className="col-md-5">
                    <AppointsLists appointData={appointData} allAppintments={allAppintments} />
                </div>
                
                
            </div>
            
        </main>
    )
}

export default Dashoard
