import React from 'react'
import { SectionHeader } from '../commonUi/SectionHeader'

export const AwardCard = ({imageSrc}) => {
  return (
    <div className='w-80 h-auto p-5'>
        <img className='w-56 h-36' src={imageSrc}/>
        <SectionHeader title={"Lorem ipsum"}/>
<div className='text-base pt-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class </div>

    </div>
  )
}


