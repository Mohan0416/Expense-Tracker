import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import AddTransaction from './Pages/AddTransaction.jsx'
import NotFound from './Pages/NotFound.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Transaction from "./Pages/Transaction.jsx"
import Report from "./Pages/Report.jsx"
import Reset from "./Pages/Reset.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/add-transaction" element={<AddTransaction />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
