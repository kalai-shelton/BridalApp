import React from 'react'
import { Badges } from '../commonUi/Badge'

export const Navbar = () => {
  return (
    <div className='w-full flex justify-between px-10 bg-primary_lite bg-gradient-to-r from-[#892CDC] via-[#E7D4FF] to-[#FFFFFF]  py-4'>
      <div className='w-2/5 flex gap-x-4'>
        <img src="/images/brand_logo.svg"/>
<div className='text-32 leading-9 text-logo_text '>Brand Name</div>
      </div>
      <div className='w-3/5 font-montserrat flex justify-between text-xl leading-6 '>
        <div>Our services</div>
        <div>Bridal</div>
        <div>About Us</div>
        <div>Blog</div>
        <div>Contact</div>
        <Badges>Offers !</Badges>

</div>
    </div>
  )
}


