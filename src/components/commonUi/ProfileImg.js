import React from 'react'

export const ProfileImg = ({imgSrc}) => {
  return (
    <div className='w-40 h-40 rounded-full bg-primary flex '>
       <img className="h-36 w-36 rounded-full self-end ml-2"src={imgSrc}/>
      </div>
  )
}


