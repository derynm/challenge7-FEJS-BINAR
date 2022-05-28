import React from 'react'
import "./CardBank.css"

export const CardBank = () => {
  return (
    <div id='card-bank-main'>
        <h5>Pilih Bank Transfer</h5>
        <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
        <div className="nama-bank-card">
            <p className='bank-border'>BCA</p>
            <p>BCA Transfer</p>
            
        </div>
        <hr/>
        <div className="nama-bank-card">
            <p className='bank-border'>BNI</p>
            <p>BNI Transfer</p>
            
        </div>
        <hr/>
        <div className="nama-bank-card">
            <p className='bank-border mandiri'>Mandiri</p>
            <p>Mandiri Transfer</p>
            
        </div>
        <hr/>
    </div>
  )
}
