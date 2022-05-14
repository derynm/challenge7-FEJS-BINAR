import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./homepage.css"

export const HomePage = () => {


  let navigate = useNavigate();

  useEffect(() => {
    const Token = sessionStorage.getItem("Token-customer")
    if (!Token) {
      navigate(`/`)
    }
  }, [])

  return (
    <div>HomePage</div>
  )
}
