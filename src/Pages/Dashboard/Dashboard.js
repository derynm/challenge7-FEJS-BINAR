import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./dashboard.css"

export const Dashboard = () => {

  let navigate = useNavigate();


  useEffect(() => {
    const Token = sessionStorage.getItem("Token")
    if (!Token) {
      navigate(`/`)
    }
  }, [])
  

  return (
    <div>Dashboard</div>
  )
}
