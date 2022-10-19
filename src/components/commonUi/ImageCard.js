import React from 'react'
import { ProfileImg } from './ProfileImg'
import { SectionHeader } from './SectionHeader'


export const ImageCard = ({imgSrc}) => {
  return (
    <div className='w-80 h-auto relative bg-white hover:shadow-lg rounded-md'>
        <div className='absolute -top-20 left-14'>
       <ProfileImg imgSrc={imgSrc}/>
        </div>
      <div className='text-center mt-24 p-5'>
<SectionHeader title={"Lorem ipsum"}/>
<div className='text-base pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class </div>
<div className='text-primary pt-8'>more</div>
      </div>
    </div>
  )
}


