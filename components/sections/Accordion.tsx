import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from 'next/image'
  

import profit from "@/assets/profit.svg"
import profit1 from "@/assets/icon (1).svg"
import profit2 from "@/assets/icon (2).svg"
import profit3 from "@/assets/icon (3).svg"
import profit4 from "@/assets/icon (4).svg"


  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className='flex items-center gap-4'>
                <Image src={profit4} alt='rofit' width={60} height={60} />
            Profitability and Growth
            </div>
          </AccordionTrigger>
          <AccordionContent>
          At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
          <div className='flex items-center gap-4'>
                <Image src={profit} alt='rofit' width={60} height={60} />
                Transparent & Fair Decentralized Earnings
            </div>
          </AccordionTrigger>
    
          <AccordionContent>
          At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
          <div className='flex items-center gap-4'>
                <Image src={profit2} alt='rofit' width={60} height={60} />
                Launching the future
            </div>
          </AccordionTrigger>
          <AccordionContent>
          At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>

            <div className='flex items-center gap-4'>
                <Image src={profit3} alt='rofit' width={60} height={60} />
                Limitless Possibilities of AI & Crypto            
            </div>
        </AccordionTrigger>
          <AccordionContent>
          At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  