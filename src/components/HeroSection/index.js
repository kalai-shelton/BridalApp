import React from 'react'
import { Badges } from '../commonUi/Badge'
import { PrimaryHeader } from '../commonUi/PrimaryHeader'

export const Hero_section = () => {
  return (
    <div className='container mx-auto flex pt-10 font-montsserat'>
      <div className='w-3/5 flex flex-col gap-y-4'>
        <div>
          <PrimaryHeader color="black" title={"Lorem ipsum dolor sit amet,"} />
          <PrimaryHeader color="primary" title={"consectetur adipiscing elit"} />
        </div>
        <div className='text-lg font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</div>
      <div className='w-40'>
      <Badges>Learn more</Badges>
      </div>
      </div>
      <div className='w-2/5'>
        <img src="/images/Frame.svg" />
      </div>

    </div>
  )
}


