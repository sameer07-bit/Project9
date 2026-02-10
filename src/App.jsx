import React, { useState } from 'react'
import './App.css';
export default function App() {
  const IMGURL = import.meta.env.BASE_URL;
  const [isLoginView, setIsLoginView] = useState(true);
   const [tooglePassword, setTooglePassword] = useState("password");

 function switchView(){
  setIsLoginView(isLoginView === true? false:true);
 } 

 function tooglePwd(){
  setTooglePassword(tooglePassword === "password"? "text": "password");
 }

  return (
    <div className='app'>
{isLoginView==true&&
<div className='login-container'>
  <h2>Sign in with email</h2>
  <div className='input-group'>
    <img className='left-icon'src={IMGURL +'email.jpg'} alt='' />
    <input type='email' placeholder='Enter your email' />
  </div>
  <div className='input-group'>
    <img className='left-icon'src={IMGURL +'lock.jpg'} alt='' />
<input type={tooglePassword} placeholder='Enter your password' />
<img className="right-icon" src={IMGURL + 'eye.jpg'} alt="toggle password visibility" onClick={tooglePwd} 
/>
  </div>
    <p>Dont have an account?<label onClick={()=>switchView()}>Sign up</label></p>
    <button>Sign In</button>
  </div>
  }
  {isLoginView==false&&
  <div className='login-container'>
  <h2>Register for a new account</h2>
  <p>if you have account already. <label onClick={()=>switchView()}>Sign in</label></p>
    <div className='input-group'>
    <img className='left-icon'src={IMGURL +'user.jpg'} alt='' />
    <input type='text' placeholder='Enter your First Name' />
  </div>
   <div className='input-group'>
    <img className='left-icon'src={IMGURL +'user.jpg'} alt='' />
    <input type='text' placeholder='Enter your Last Name' />
  </div>
    <div className='input-group'>
    <img className='left-icon'src={IMGURL +'phone.jpg'} alt='' />
    <input type='text' placeholder='Enter your Phone Number' />
  </div>
  <div className='input-group'>
    <img className='left-icon'src={IMGURL +'lock.jpg'} alt='' />
<input type={tooglePassword} placeholder='Enter your password' />
<img className="right-icon" src={IMGURL + 'eye.jpg'} alt="toggle password visibility" onClick={tooglePwd} 
/>
  </div>
  <div className='input-group'>
    <img className='left-icon'src={IMGURL +'lock.jpg'} alt='' />
<input type={tooglePassword} placeholder='Confirm Password' />
<img className="right-icon" src={IMGURL + 'eye.jpg'} alt="toggle password visibility" onClick={tooglePwd} 
/>
  </div>

  </div>}
    </div>
  )
}