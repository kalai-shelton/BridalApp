import React from 'react'
import { FooterList } from '../commonUi/FooterList'
import { CopyRit } from './CopyRit'
export const Footer = () => {
  return (
    <div className='bg-white w-full   mx-auto'>
          <div className='container mx-auto py-8 flex justify-between  border-b mb-2'>
<div className='flex w-1/5 gap-x-20 justify-between'>
<FooterList listTitle={"About"} listItem1={"About us"} listItem2={"Contact us"} listItem={"For Suppliers"} listItem4={"Privacy policy"}/>
<FooterList listTitle={"About"} listItem1={"About us"} listItem2={"Contact us"} listItem={"For Suppliers"} listItem4={"Privacy policy"}/>
</div>
<div className='flex flex-col w-4/5 mt-20'>
  <div className='w-72 self-end'>
  <div className='text-primary text-base font-bold self-end  mb-2'>Follow us</div>
  <div className='flex gap-x-5 self-end  '>
<img src="images/facebook.png"/>
<img src="images/instagram.png"/>
<img src="images/youtube.png"/>
<img src="images/in.png"/>
</div>
</div>
</div>
</div>
<CopyRit/>
      
    </div>
  )
}


