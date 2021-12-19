import React from 'react'
import './contact.css'

const ContactForm = () => {
    return (
        <section className='contactSection '>
            <div className='text-center mt-5 pt-5'>
                <h4 style={{
                        color: "#70CDCD"
                    }}>contact us</h4>
                <h1
                    className='text-white'
                    style={{
                        color: "#203047"
                    }}>Always Connect With Us</h1>
            </div>
            <div className="row">
                <div className="col-md-12 ">
                    <form className='w-50 m-auto'>
                        <div class="form-group mt-4">

                            <input
                                style={{height:"60px"}}
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Email Address*"/>

                        </div>
                        <div class="form-group mt-4">

                            <input
                            style={{height:"60px"}}
                                type="text"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Subject*"/>
                        </div>
                        <div class="form-group mt-4 ">

                            <textarea
                                placeholder='Your Message'
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="6"></textarea>
                        </div>

                        <button style={{backgroundColor:"#17D2BC",fontWeight:"bold",minWidth:"30%"}}  type="submit" class="btn btn-primary mt-5 d-block m-auto">Submit</button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default ContactForm
