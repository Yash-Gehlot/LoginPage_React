import React, { useState } from 'react'
import "./LoginSiginup.css"

import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import  password_icon from '../Assets/password.png'


export const LoginSiginup = () => {

  const [action,setAction] = useState('Sign Up')

  return (
    <div className='container'>
      
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        { action==="Login" ? <></>  : <div className="input">
          <img src={person_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="Email" placeholder='Email'/>
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="Passward" placeholder='Passward'/>
        </div>

        <div className="submit-container">
          <div className={action==="Login"? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
          <div className={action==="Sign Up"? "submit gray" : "submit" } onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  )
}
