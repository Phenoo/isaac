import Image from 'next/image'
import React from 'react'

import image1 from "@/assets/Video (3).png"
import Container from '../Container'
const Profit = () => {
  return (
    <Container>
            <div>
            <h4 className='uppercase text-lg md:text-4xl font-bold' >
          Profiting Through</h4>
        <h6 className='gradtext text-base sm:text-xl md:text-2xl font-bold'>AI Innovation & Decentralization</h6>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mt-4 md:gap-12 items-center'>
            <div className='md:col-span-6  bg-cover bg-no-repeat h-96'>
                <div className=' h-full'>
                  <Image src={image1} alt='rofit' width={500} height={400} className='w-full' />
                </div>
            </div>
            <div className='md:col-span-4'>
                <h4 className='text-xl font-bold'>The dynamic community driven business model of the future.</h4>
                <br />
                <p className='text-xs'>
                At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                </p>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Profit