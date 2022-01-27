import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const AddDoctors = () => {
    const [doctorInfo,setDoctorInfo]=useState({})
    const [newFileInfo,setNewFile]=useState(null)
    console.log(newFileInfo)
    const handleBlur=(e)=>{
        const newInfo={...doctorInfo}
        newInfo[e.target.name]=e.target.value
        setDoctorInfo(newInfo)
    }
    const handlechange=(e)=>{
         const newFile=e.target.files[0]
         setNewFile(newFile)
    }
   const handleSubmit=(e)=>{
    // const files = e.target.files
    const formData = new FormData()
    formData.append('file', newFileInfo)
    formData.append('name', doctorInfo.name)
    formData.append('email', doctorInfo.email)
  
    fetch('http://localhost:4000/addDoctors', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
   }
    return (
        <main className='dashboardContainer'>
             <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar  />
                </div>
              <div className="col-md-10">

              <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                      
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label>Upload Your Image</label>
                        <input onChange={handlechange} type="file" className="form-control"  placeholder="Upload your photo"/>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
             </form>

              </div>
                </div>
            
        </main>
    )
}

export default AddDoctors
