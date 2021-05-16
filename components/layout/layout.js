import React from 'react'
import Announcement from '../announcement'
import Footer from '../footer'
import Nav from '../nav'

export default function Layout({children}) {
    return (
        <div>
            <Announcement/>
            <Nav/>
            {children}

            <Footer/>
            
        </div>
    )
}
