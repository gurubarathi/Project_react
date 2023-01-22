import React from 'react';
import './App.css';
import image from '../src/img/netflix.png';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
function Home() {
   let signInPage= ()=>window.open('www.netflix.com/in/login');
  return (
    <>
     <div className="front-page">
      <div className='header'>
         <div className='logo'>
          <img src={image} alt="img" />
          </div>
          <div className='btn'><Button variant="contained"><Link href="/M">Sig in</Link></Button></div>
      </div>
      <div className='banner'>
          <div className='banner-content'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className='email-group'>
            <input type='email' placeholder='Email address'/>
            <button type='button' >Get Started </button>
          </div>
          </div>
          
      </div>
    </div>
    </>
  )
}

export default Home