import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Carousel from './Carousel'
import { CryptoDashboardStyles } from './Styles/CryptoDashboardStyles'
import Table from './Table'
import { options } from './ApiOptions/CoinsOptions';
import axios from "axios";
import Spinner from './Spinner'
import ApiError from './ApiError'
import { colors } from './utils/ThemeColors'


const CryptoDashboard = () => {
  const coins = useSelector((state) => state.coins.value)
  const theme = useSelector((state)=>state.theme.value)
  const [crypto,setCrypto] = useState('')
  const[error,setError] = useState('')
  useEffect(()=>{
    if (!coins) {
      axios.request(options(100)).then(function (response) {
        setCrypto(response.data.data)
      }).catch(function (error) {
        setError('failed to fetch Please check Network connection')
      });
    }else{
      setCrypto(coins)
    }
  },[])
  return (
    <CryptoDashboardStyles colors = {colors(theme)}>
      
      {crypto && !error && <div className="page" >
        <Carousel crypto = {crypto}/>
        <Table crypto = {crypto}/>
      </div>}
      {!crypto && !error && <Spinner/>}
      {error && <ApiError error={error}/>}
    </CryptoDashboardStyles>
  )
}

export default CryptoDashboard