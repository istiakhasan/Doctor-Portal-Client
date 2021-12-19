import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../Footer/Footer'
import Appoinment from '../Appoinment/Appoinment'
import Blog from '../Blog/Blog'
import ContactForm from '../ContactForm/ContactForm'
import Doctor from '../Doctor/Doctor'
import Header from '../Header/Header'
import Service from '../Service/Service'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
    useEffect(()=>{
        document.title="Home"
    },[])
    return (
        <Container fluid>
            <Header />
            <Service />
            <Appoinment />
            <Testimonial />
            <Blog />
            <Doctor />
            <ContactForm />
            <Footer />
            
        </Container>
    )
}

export default Home
