import React, { useEffect, useState } from 'react'
import Paitent from '../Patient/Paitent'
import Sidebar from '../Sidebar/Sidebar'
import './allpaitentssyle.css'

const AllPaitents = () => {
    const [patients,setPatients]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/alPatients')
        .then(res=>res.json())
        .then(data=>setPatients(data))
    },[])
    return (
        <main className='dashboardContainer'>
            <div className="container-fluid row">
                <div className="col-md-2">

                     <Sidebar />
                </div>

                <div className="col-md-10">
                <h5 className='mt-3 mb-4'><strong>Patients</strong> </h5>

                   <div className='patientsWraper  '>
                   <div style={{display:"flex",justifyContent:"space-between"}} className='mt-5 mb-3 '>
                        <h6 style={{color:"#12D0D3"}}><strong>All Patients</strong> </h6>
                        <select  style={{border:"1px solid #ACACAC",borderBlockStyle:"none"}} className='text-secondary' >
                            <option value="Week">Week</option>
                            <option value="Months">Months</option>
                        </select>
                    </div>
                    <table className='table'>
                    <thead className=''>
                               <tr className='text-secondary'>
                                   <th scope='col'><small>Sr. No</small></th>
                                   <th scope='col'><small>Gender</small></th>
                                   <th scope='col'><small>Age</small></th>
                                   <th scope='col'><small>Weight</small></th>
                                   <th scope='col'><small>Contact</small></th>
                                   <th scope='col'><small>Email</small></th>
                               </tr>

                           </thead>
                           <tbody>

                        {
                        patients.map((patient,i)=>(
                           
                            <Paitent key={i} index={i} patient={patient} />
                            ))
                        }
                        </tbody>
                        </table>

                   </div>
                </div>
            </div>

            
        </main>
    )
}

export default AllPaitents
