import React, { useState } from 'react'
import {FcHome} from 'react-icons/fc'
import {BsCurrencyBitcoin} from 'react-icons/bs'
import {FcCurrencyExchange} from 'react-icons/fc'
import {SiFuturelearn} from 'react-icons/si'
import {IoColorPalette} from 'react-icons/io5'
import {FcNews} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import SelectPrediction from './SelectPrediction'
import SelectTheme from './SelectTheme'
import { MenuDropdownStyles } from './Styles/MenuDropdownStyles'

const DropdownMenu = ({show,coords}) => {
  const navigate = useNavigate()
  const[hide,setHide] = useState(true)
  const[hidetheme,setHideTheme] = useState(true)
  
  return (
    <MenuDropdownStyles >
      <div className="close" >
        <span onClick={()=>show(false)}><AiOutlineClose fontSize={20}/></span>
      </div>
      <div className="links">
        <div className="link" onClick={()=>navigate('/')}>
          <FcHome fontSize={29}/>
          <span>Home</span>
        </div>
        <div className="link" onClick={()=>navigate('/news')}>
          <FcNews fontSize={29}/>
          <span>News</span>
        </div>
        <div className="link" onClick={()=>navigate('/cryptodashboard')}>
          <BsCurrencyBitcoin fontSize={29} />
          <span>Crypto Dashboard</span>
        </div>
        <div className="link" onClick={()=>navigate('/cryptoexchanges')}>
          <FcCurrencyExchange fontSize={29} />
          <span>Crypto Exchanges</span>
        </div>
        <div className="predict" >
          <div className="shown" onClick={()=>setHide(false)}>
            <SiFuturelearn fontSize={21} />
            <span>Predict Crypto Prices</span>
          </div>
          <div className="select">
            {!hide && <SelectPrediction hide={setHide}/>}
          </div>
          
        </div>
        <div className="toggle" >
          <div className="shown" onClick={()=>setHideTheme(false)}>
            <IoColorPalette fontSize={29} color={'green'}/>
            <span>Color Theme</span>
          </div>
          <div className="select">
            {!hidetheme && <SelectTheme hidetheme={setHideTheme}/>}
          </div>
          
        </div>
      </div>
    </MenuDropdownStyles>
  )
}

export default DropdownMenu