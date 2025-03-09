import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Create from './pages/Create'
// import Manage from './pages/Manage'
// import Liquidity from './pages/Liquidity'
import { FAQ } from './components/Faq'

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/createToken" element={<Create />} />
     </Routes>
     <FAQ />
     <Footer />
    </>
    
  )
}

export default App