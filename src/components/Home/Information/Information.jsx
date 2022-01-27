import React from 'react'
import { Infodata } from '../../../Data/Data'
import './Information.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Information = () => {
    return (
        <section className="row">
            {
                Infodata.map(info=>(
                    <div key={info.id} className='text-white col-md-4 mt-3 d-flex align-items-center justify-content-center' style={{height:"110px"}}>
                         <div className="cardWraper" style={{background:info.bgcolor}}>
                            <div className='iconwraper'>
                                <FontAwesomeIcon className='infoIcon' icon={info.icon}></FontAwesomeIcon>
                            </div>
                            <div className="infoContent">

                            <h6>{info.title}</h6>
                            <small>{info.des}</small>
                            </div>
                         </div>
                    </div>
                ))
            }
            
        </section>
    )
}

export default Information
