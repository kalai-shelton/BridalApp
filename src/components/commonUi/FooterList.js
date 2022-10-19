import React from 'react'

export const FooterList = ({listTitle, listItem1, listItem2, listItem3, listItem4}) => {
  return (
    <div className='flex flex-col gap-y-1'>
        <div className='text-base font-semibold text-primary'>{listTitle} </div>
        <div className='text-sm mt-3 text-primary font-semibold'>{listItem1}</div>
        <div className='text-sm text-primary font-semibold'>{listItem2}</div>
        <div className='text-sm text-primary font-semibold'>{listItem2}</div>
        <div className='text-sm text-primary font-semibold'>{listItem3}</div>
        <div className='text-sm text-primary font-semibold'>{listItem4}</div>

      
    </div>
  )
}


