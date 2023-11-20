import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'

import image1 from "@/assets/Image (1).png"
import image2 from "@/assets/Image (2).png"
import image3 from "@/assets/Image (3).png"
import Container from '../Container'



const Offers = () => {
  const data  = [
    {
      name: 'token',
      desc: 'Empowering NFT Holders and Shaping AI Development',
      text: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
      image: image1
    },
    {
      name: 'revenue',
      desc: 'Driving income and growth through decentralization',
      text: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
      image: image2
    },
    {
      name: 'launchpad',
      desc: ' Driving the future of AI Innovation',
      text: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
      image: image3
    }
  ]
  return (
   <Container>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 place-items-center'>

      
{
  data.map((item, i) => (
    <div key={i} className='w-full space-y-4 bg-[#13171D99] p-2 md:p-4 pb-6  rounded-sm'>
      <div className='flex justify-end items-end w-full mr-0'>
        <Badge className='bg-white text-black text-xs '>COMING SOON</Badge>
      </div>
    <h4 className='text-2xl uppercase font-bold'>{item.name}</h4>
    <p className='gradtext font-bold'>{item.desc}</p>
    <div>
      <Image src={item.image} alt='offer' width={300} height={255} className='w-full'  />
    </div>
    <p className='text-xs'>
      {item.text}
    </p>
  </div>
  ))

}
</div>
   </Container>
  )
}

export default Offers