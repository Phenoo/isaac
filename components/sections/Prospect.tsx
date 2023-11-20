import React from 'react'

import image4 from "@/assets/Image (4).png"
import image5 from "@/assets/Image (5).png"
import image6 from "@/assets/Image (6).png"
import Container from '../Container'
import Image from 'next/image'

const Prospect = () => {
    const data  = [
        {
          name: 'AI Prospects, Market Size, and Development Pace',
          desc: 'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
          text: '',
          image: image4
        },
        {
          name: 'AI Tools and Market',
          desc: 'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
          image: image5
        },
        {
          name: 'AI, Crypto, and NFT Market',
          desc: ' Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
          image: image6
        }
      ]
  return (
    <Container>
        <div className='space-y-4 flex items-center mx-auto w-full flex-col'>
        {
  data.map((item, i) => (
    <div key={i} className='w-full flex flex-col md:flex-row items-center gap-6 bg-[#13171D99] p-2 md:p-4  rounded-sm'>
        <div className='space-y-4 md:w-4/5'>
        <h4 className='font-bold text-lg md:text-3xl uppercase'>{item.name}</h4>
        <p className='text-sm'>{item.desc}</p>
        </div>

        <div className='w-full md:w-1/5 h-64'>
        <Image src={item.image} alt='offer' width={300} height={255} className=' object-cover w-full h-full'  />
        </div>
  </div>
  ))

}
        </div>
    </Container>
  )
}

export default Prospect