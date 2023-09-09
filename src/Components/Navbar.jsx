import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Bg from '../Images/bg.png'
import '../index.css'

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expanded-lg shadow-3 'style={{backgroundColor: 'rgb(4, 4, 44)'}}>
        <div className="container">
            <Link to='/'>
             <img src={Bg} alt='Brand Logo' style={{width: "7rem", height: "5rem"}}/>
            </Link>
            
            <div className='items'>
              <div>
              <Link to='/' className='home-link' style={{color: 'white', textDecoration: 'none', fontSize: "medium"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
              fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 
              7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 
              .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5
              .5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.
              5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
             </svg>
              <span>Home</span>
              </Link>
              </div>

            <button className='login-btn'>
            <Link to='/login' style={{color: "white", textDecoration:'none'}}>
                <span>Login</span>
            </Link>
            </button>

            <button className='signup-btn'>
            <Link to='/register' style={{color: "white", textDecoration:'none'}}>
                <span>Register</span>
            </Link>
            </button>

            <div className="name">
             <span>Login as: Posh</span>
             </div>

            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar