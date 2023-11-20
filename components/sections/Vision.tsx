import React from 'react'
import Container from '../Container'
import Image from 'next/image'

import vison from '@/assets/vison.png'
import { AccordionDemo } from './Accordion'

const Vision = () => {
  return (
    <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-4'>
                <h4 className='text-base sm:text-xl md:text-3xl font-bold uppercase'> 
                    Our vision is to support the innovation of AI blockchain projects <span className='gradtext'>    while prioritizing communities and democratizing profits</span>
                </h4>
                <div className='w-full flex justify-end'>
                    <Image src={vison} alt='vision' width={400} height={300} />
                </div>
            </div>

            <div>
                <AccordionDemo />
            </div>


        </div>
    </Container>
  )
}

export default Vision