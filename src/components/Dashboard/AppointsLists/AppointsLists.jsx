import React from 'react'

const AppointsLists = ({allAppintments,appointData}) => {
    return (
        <section className='appointlistContnainer h-100 mt-5 pt-3'>

            
            <div style={{boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"}} className='w-75 h-75'>
             {
                 allAppintments.length===0?(<p className='text-center p-5'>Please Selecte a date</p>):(

                    <div style={{padding:"30px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h6 style={{color:"#1EC7C2"}}>Appointments</h6>
                            <p className='text-secondary'>{appointData.toDateString()}</p>
                            
                        </div>
                        <table className='table '>
                           <thead className=''>
                               <tr className='text-secondary'>
                                   <th scope='col'>Name</th>
                                   <th scope='col'>Shedule</th>
                                   <th scope='col'>Action</th>
                               </tr>

                           </thead>
                           <tbody>
                               {
                                   allAppintments.map(apdt=>(
                                       
                                       <tr>
                                           <td><strong>{apdt.name}</strong></td>
                                           <td><strong>{new Date(apdt.date).toDateString()}</strong></td>
                                           <td><select style={{background:"#14D1CC",border:"none",lineHeight:"30px",color:"white"}}>
                                               <option value="Visited">Visited</option>
                                               <option value="Not Visited">Not Visited</option>
                                               </select></td>
                                       </tr>
                                   ))
                               }
                           </tbody>
                        </table>
                    </div>
                 )
             }          
            </div>
            
        </section>
    )
}

export default AppointsLists
