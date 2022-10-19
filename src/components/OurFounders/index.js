import React from 'react'
import { ImageCard } from '../commonUi/ImageCard'
import { PrimaryHeader } from '../commonUi/PrimaryHeader'
import { SecondaryHeader } from '../commonUi/SecondaryHeader'
export const Our_founders = () => {
    return (
        <div className='container mx-auto mt-20 text-center '>
            <div className='flex gap-x-3 items-center justify-center'>
                <PrimaryHeader color="black" title="Our" />
                <PrimaryHeader color="primary" title={"Founders"} />
            </div>

            <div className='flex justify-center gap-x-20 mt-24'>
                <ImageCard imgSrc={'/images/img1.png'} />
                <ImageCard imgSrc={'/images/founder2.png'} />
                <ImageCard imgSrc={'/images/founder3.png'} />
            </div>
        </div>
    )
}

