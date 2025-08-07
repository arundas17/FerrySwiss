import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">contact</Link>
            </nav>
        </header>
        <main>{<Outlet/>}</main>
        <footer>
            <h4>footer @ ferryswiss</h4>
        </footer>
    </div>
  )
}

export default MainLayout