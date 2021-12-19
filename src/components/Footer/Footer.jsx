import React from 'react'

import './footer.css'


const Footer = () => {
    return (
        <section className='footerSection mt-5 '>
            <div className="container mt-5 pt-5">
               <div className="row">
               <div className="col-md-3 footeritems">
                   <br />
                   <br />
                   <br />
                 <ul className="text-secondary">
                     <li>Emergency Dental Care</li>
                     <li>Check Up</li>
                     <li>Treatment of Personal Diseases</li>
                     <li>Tooth Extraction</li>
                     <li>Check up</li>
                 </ul>
                </div>
                <div className="col-md-3 footeritems">
                    <h6 className='mb-5'><strong>Service</strong></h6>
                    <ul className='text-secondary'>
                     <li>Emergency Dental Care</li>
                     <li>Check Up</li>
                     <li>Treatment of Personal Diseases</li>
                     <li>Tooth Extraction</li>
                     <li>Check up</li>
                     <li>Check up</li>
                     <li>Check up</li>
                 </ul>
                </div>
                <div className="col-md-3 footeritems">
                <h6 className='mb-5'><strong>Oral Health</strong></h6>
                    <ul className='text-secondary'>
                     <li>Emergency Dental Care</li>
                     <li>Check Up</li>
                     <li>Treatment of Personal Diseases</li>
                     <li>Tooth Extraction</li>
                     <li>Check up</li>
                     <li>Check up</li>
                     <li>Check up</li>
                 </ul> 
                </div>
                <div className="col-md-3 footeritems">
                <h6 className='mb-5'><strong>Oral Health</strong></h6>
                <p className='text-secondary'>New York-101010 Hudson <br/>Yards</p>
                <div className='foterIcon mt-4'>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google-plus-g"></i>
                <i class="fab fa-twitter"></i>
                </div>
                </div>
               </div>
               <p className='text-secondary text-center mt-5 mb-5'><small>Copyright{(new Date()).getFullYear()} All Rights Reserved@Istiak</small></p>
            </div>
            
        </section>
    )
}

export default Footer
