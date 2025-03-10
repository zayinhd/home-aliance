import React from 'react'
import Nav from '../components/Navigation/index'
import Footer from '../components/Navigation/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />

        </>

    )
}

export default Layout