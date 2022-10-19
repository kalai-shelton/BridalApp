import React from 'react'

export const PrimaryHeader = ({title,color}) => {
  return (
    <div className={`text-42 leading-51 font-bold text-${color}`}>
      {title}
    </div>
  )
}


