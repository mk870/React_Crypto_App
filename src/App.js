import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Globalstyles } from './components/Styles/GlobalStyles';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import CryptoDashboard from './components/CryptoDashboard'
import News from './components/News'
import Errorpage from './components/Errorpage';
import CryptoDetails from './components/CryptoDetails';
import CryptoExchanges from './components/CryptoExchanges';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {colors} from './components/utils/ThemeColors'

function App() {
  const [activeMenu,setActiveMenu] = useState(true)
  const[screenSize,setScreenSize] = useState(null)
  const theme = useSelector((state)=>state.theme.value)
  useEffect(()=>{
    const handleResize = ()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize',handleResize)
    handleResize()
    return()=>window.removeEventListener('resize',handleResize)
  },[])

  useEffect(()=>{
    if(screenSize <= 760){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  },[screenSize])
  return (
    <BrowserRouter>
      <Globalstyles colors = {colors(theme)}/>
      <div className="container">
        {activeMenu && <Sidebar/>}
        {!activeMenu && <Navbar/>}
        
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path='/cryptoexchanges' element={<CryptoExchanges/>}/>
          <Route path='/cryptodashboard' element={<CryptoDashboard/>}/>
          <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
