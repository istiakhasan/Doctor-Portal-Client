import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartState } from '../../../Context/Context'
import './Sidebar.css'


const Sidebar = () => {
    const {loggedInUser,setLoggedInUser}=CartState()
    const [isDoctor,setIsDoctor]=useState(true)
    const navigate = useNavigate()
    const logOutEvent=()=>{
        localStorage.clear()
        navigate('/')
        
    }


//    useEffect(()=>{
//        fetch('http://localhost:4000/isDoctor',{
//            method:'POST',
//            headers:{'content-type':'application/json'},
//            body:JSON.stringify({email:loggedInUser.email})
//        })
//        .then(res=>res.json())
//        .then(data=>setIsDoctor(data))
//    })

    return (
        <section style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}  className='sidebarContainer '>

            <ul className='pt-5'>
                <li><Link to="/dashboard/appointsments"><span><i className="fas fa-calendar-check mx-3"></i></span> Appointment</Link></li>
               {isDoctor &&
                       <>
                       <li> <Link to="/dashboard/dashboard"><span><i className="fas fa-bars mx-3"></i></span> Dashboard</Link></li>
                        <li><Link to="/dashboard/patients"><span><i className="fas fa-users mx-3"></i></span> Paitents</Link></li>
                       <li> <Link to="/dashboard/dashboard"><span><i className="fas fa-capsules mx-3"></i></span> Prescriptions</Link></li>
                       <li> <Link to="/dashboard/doctor"><span><i className="fas fa-user-plus mx-3"></i></span> Add Doctor</Link></li>
                       <li><Link to="/dashboard/dashboard"><span><i className="fas fa-cog mx-3"></i></span> Settings</Link></li>
                       </>
               }
            </ul>
            <p onClick={logOutEvent} style={{display:"flex",alignItems:"center",color:"white",cursor:"pointer",marginLeft:"20px"}}><span><i style={{fontSize:"25px",color:"white",margin:"8px"}} className="fas fa-sign-out-alt"></i></span> Log Out</p>
            
        </section>
    )
}

export default Sidebar
