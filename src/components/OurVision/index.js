import React from 'react'
import { SecondaryHeader } from '../commonUi/SecondaryHeader'


export const Our_vision = () => {
  return (
    <div className='flex w-full container mx-auto '>
        <div className='w-1/2 flex flex-col justify-center gap-y-2 text-center pr-10'>
      <SecondaryHeader title="Our Vision"/>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>

    </div>
       
    <div className='w-1/2 flex justify-center pt-12'>
   
    <img src="/images/frame3.svg"/>
  
    </div>
    
  
</div>
  )
}


