import React from 'react'
import { PrimaryHeader } from '../commonUi/PrimaryHeader'
import { AwardCard } from './AwardCard'

export const Awards = () => {
  return (
    <div className='container mx-auto mt-20 text-center '>
    <div className='flex gap-x-3 items-center justify-center'>
    <PrimaryHeader color="primary" title ="Awards"/>
    <PrimaryHeader color="black" title ="&"/>
    <PrimaryHeader color="primary" title={"Achievements"}/>
    </div>
    <div className='flex justify-between mt-10'>
    <AwardCard imageSrc={"/images/assocham.png"}/>
    <AwardCard imageSrc={"/images/indian.png"}/>
   
    <AwardCard imageSrc={"/images/dove.png"}/>
    <AwardCard imageSrc={"/images/most.png"}/>
    </div>
     
    </div>
  )
}


