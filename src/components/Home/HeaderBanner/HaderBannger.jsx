import React from 'react'
import './HeaderBanner.css'
import Chair from '../../../images/chair.png'
import Information from '../Information/Information'

const HaderBannger = () => {
    return (
        <> 
      
        <main style={{height:"700px",display:"flex",justifyContent:"center",alignItems:"center"}} className='row'>
           
            <div className="col-md-4 ">
                <h1 style={{color:"#3A4256"}}>Your New Smile <br />Starts Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nam quis voluptas tenetur nesciunt porro officiis? Officia veniam repudiandae consectetur?</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>

            </div>
            <div className="col-md-5">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
            
        </main>
        

       


        <Information />
        
         
        </>
    )
}

export default HaderBannger
