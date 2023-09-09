import React from 'react'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from '../Images/chat-lineal.png'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="container">
  
      <div className="entry-point">
      <img src={Chat} alt='' />

        <p>Already a member? <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" 
        height="25" fill="currentColor" class="bi bi-arrow-right-circle-fill" 
        viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 
        1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 
        0 1 0-.708.708L10.293 7.5H4.5z"/>
     </svg>
        </span></p>
        <Link to="/login"><button className='btn-login2'>Login</button></Link>
      </div>  
    </div>
   
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#000033" fill-opacity="1" d="M0,128L24,138.7C48,149,96,171,144,160C192,
      149,240,107,288,90.7C336,75,384,85,432,106.7C480,128,528,160,576,160C624,
      160,672,128,720,128C768,128,816,160,864,181.3C912,203,960,213,1008,208C1056,
      203,1104,181,1152,165.3C1200,149,1248,139,1296,149.3C1344,160,1392,192,1416,
      208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,
      1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,
      720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,
      320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
    </>
  )
}

export default Home