import React from 'react';
import { useForm } from "react-hook-form";
import group6 from '../images/group6.svg';
import pcs from '../images/pcs.png';
import { CaretRightFill } from 'react-bootstrap-icons';
import '../App.css';

function Banner() {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = (data) => console.log(data);

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
              <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register('Email')} placeholder="Email address" />
                  <button type="submit"><CaretRightFill /></button>
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
