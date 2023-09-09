import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Register() {
  return (
    <>
      <div className="container mt-3"
      style={{display: 'flex', alignItems: 
      'center', justifyContent: 'center',
       backgroundColor: 'rgb(4, 4, 44)',
      padding: '1rem', width: '25rem',
      height: "25rem", borderRadius: "1rem"}}
      >
        <form className='registration-form'>
          <label style={{color: "white", fontSize: 'large', fontWeight:"bold"}}>
          Register</label>
          <input type='text' name='username' placeholder='Username'/>
          <input type='text' name='email' placeholder='Email'/>
          <input type='password' name='password' placeholder='Password'/>
          <input type='password' name='confirm-password' placeholder='Confirm password'/>
          <div className='show-password'>
            <input type='checkbox' name='show-password'style={{width: '1rem'}}/>
            <label>Show password</label>
          </div>
          <button type='submit' className='register-button'>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register