import React from 'react'
import './Service.css'
import { Servicedata } from '../../../Data/Data'
import Treatment from '../../../images/treatment.png'

const Service = () => {
    return (
        <section className='servicesection mt-5 pb-5 '>
            <div className='text-center'>
                <h4 style={{color:"#70CDCD"}}>OUR SERVICES</h4>
                <h1 style={{color:"#203047"}}>Services We Provide</h1>
            </div>
            <div className="row mt-5 mb-5">
                {
                    Servicedata.map(srdt=>(
                        <div key={srdt.id} className="col-md-4 text-center pt-5">
                            <img style={{objectFit:"cover",margin:"10px",height:"50px"}} src={srdt.img} alt="" />
                            <h4 style={{color:"#555D68"}}>{srdt.name}</h4>
                            <p style={{textAlign:"center",margin:"auto"}} className='text-secondary w-50 '>{srdt.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className="row mt-5 pt-5 pb-5 ">
                <div className="col-md-5  col-sm-12 text-end">
                    <img className='img-fluid  m-auto ' style={{width:"70%",height:"600px",objectFit:"cover",display:"block"}} src={Treatment} />
                </div>
                <div className="col-md-7 p-3 col-sm-12 col-xs-12  ">

                 <div className='pt-4  w-75 m-auto ' >
                   
                   <h1 className="mb-5 ">Exceptionnal Dental Care,On Your Terms</h1>
                    <p className='text-secondary mt-3 mb-5' style={{lineHeight:"30px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptatibus quia natus nobis, accusantium officiis unde accusamus reiciendis suscipit expedita ipsum, optio corporis veniam corrupti perferendis ex impedit ducimus amet laborum doloremque dolorum quae. Doloribus ullam, maiores, amet natus enim ex iure repellat alias et ut cumque laudantium, eos aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga provident suscipit vitae reprehenderit aliquam laudantium error aperiam similique dolores corrupti.</p>
                    <button style={{background:"#10CFE6",border:"none",padding:"8px",minWidth:"40%",color:"white",fontWeight:"bold"}}>Learn More</button>
                  
                 </div>
                </div>
            </div>
            
        </section>
    )
}

export default Service
