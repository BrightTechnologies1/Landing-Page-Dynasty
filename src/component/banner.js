import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import group6 from '../images/group6.svg';
import pcs from '../images/pcs.png';
import { CaretRightFill } from 'react-bootstrap-icons';
import '../App.css';
import gif from '../images/cheers.gif';

function Banner() {

  const [state, handleSubmit] = useForm("meqnlopo");
  if (state.succeeded) {
      return (
        <div className='modal'>
          <p>Your email address has been added to a waiting list.</p>
          <img src={gif} alt='' width={500} />
          <h2><a href='../index.js'>Click here to go back</a></h2>

        </div>
      );
  }

  return (
    <div className='header'>
      <div className='banner'>
        <div className='banner-item1'>
          <img src={group6} alt="" />
        </div>
        <div className='banner-text'>
          <h1>DYNASTYPRO</h1>
          <h2>THE PRO AGGREGATOR</h2>
          <h3>We are an aggregator that aims to help new <b>NEAR</b> launched projects create high quality experiences for their communities. Check out our approved and vetted their collection and project are!</h3>
          <h4><b>Join our waitlist for updates</b></h4>
        </div>
        <div className='footer-widget-right'>
              <form onSubmit={handleSubmit}>
                <input placeholder="Email Address" name='email' type='email' />
                <button type="submit" disabled={state.submitting} ><CaretRightFill /></button>
              </form>
          </div>
      </div>

      <div className='pcs'>
        <img src={pcs} alt="" />
      </div>
    </div>
    
  );
}

export default Banner;
