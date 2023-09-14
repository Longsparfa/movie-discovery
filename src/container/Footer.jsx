import React from 'react'
import { facebook, instagram, twitter, youtube } from '../assets';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-[12rem] '>
        <div className='flex justify-around mb-2'>
          <a href="#" className='mr-4'>
          <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" className='mr-4'>
          <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" className='mr-4'>
          <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
          <img src={youtube} alt="Youtube" />
          </a>
        </div>
        <div className='flex justify-around'>
          <p className='mr-4'><a href="#">Conditions of use</a></p>
          <p className='mr-4'><a href="#">Privacy & Policy</a></p>
          <p><a href="#">Press Room</a></p>
        </div>
        <p>&copy; {year} MovieBox Clone by Parfa001</p>
      </div>
    </>
  )
}

export default Footer;