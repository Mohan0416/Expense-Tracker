import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './Components/Navbar'
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import AddTransaction from './Pages/AddTransaction';
import NotFound from './Pages/NotFound';

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
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
