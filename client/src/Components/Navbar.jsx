 import React, { useEffect } from 'react'
 import { Link, useLocation } from 'react-router-dom'
 import '../Styles/Navbar.css'

 const Navbar = () => {
    const location = useLocation();
   return (
     <nav className='navbar'>
        <h1 className='logo'>Expense Tracker</h1>
        <ul className='nav-links'>
            <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/">📊 Dashboard</Link>
            </li>
            <li className={location.pathname === '/transaction' ? 'active' : ''}>
                <Link to="/transaction">📄Transaction</Link>
            </li>
            <li className={location.pathname === '/report' ? 'active' : ''}>
                <Link to="/report">⏳Report</Link>
            </li>
            <li className={location.pathname === '/reset' ? 'active' : ''}>
                <Link to="/reset">🔄Reset</Link>
            </li>
        </ul>
     </nav>
   )
 }
 
 export default Navbar