import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './Components/Navbar'
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import NotFound from './Pages/NotFound';
import AddTransaction from './Pages/AddTransaction';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<AddTransaction />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
