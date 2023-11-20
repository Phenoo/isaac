import React from 'react'
import Container from '../Container'
import { Button } from '../ui/button'
import Image from 'next/image'

import pass from "@/assets/Video (2).png"
const Pass = () => {
  return (
    <Container>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
            <div className='space-y-4'>
                <h4 className='uppercase text-xl md:text-3xl font-bold' >
                    creon  pass nft
                </h4>
                <p className='gradtext text-base sm:text-xl font-bold'>
                The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
                </p>

                <br />

              <div className='space-y-4'>
                <p>Pre-launch investment opportunities for upcoming AI projects</p>
                <p>Free and early access to Creon built AI projects</p>
                <p>Higher allocation limits on the Creon AI Launchpad</p>
                <p>Revenue share distribution from Creon built AI projects</p>
              </div>

              <Button className='button md:w-72 w-full'>
                Buy Creon Pass
              </Button>
            </div>
            <div className='relative h-full'>
                <Image src={pass} alt='sizes' width={300} height={500} className='h-full' />
            </div>
        </div>
    </Container>
  )
}

export default Pass