import React from 'react'
import Navigationbar from '../Navbar/Navigationbar'
import HeaderBanner from '../HeaderBanner/HaderBannger'

import './Header.css'


const Header = () => {
    return (
        <div className='container-fluid header-container h-100'>
            <Navigationbar />
            <HeaderBanner />
           
            
        </div>
    )
}

export default Header
