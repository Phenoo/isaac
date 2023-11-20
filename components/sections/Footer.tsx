import { Send, Slack, Twitter } from 'lucide-react'
import React from 'react'
import Container from '../Container'

const Footer = () => {
  return (
 <Container>
     <div className='flex flex-row justify-between items-center py-4'>
      <div className='flex gap-8'>
            <div>
              &copy; Creon 2023. All rights reserved.
            </div>
            <div className='flex gap-2'>
              <span className='border rounded-full border-white p-1'>
              <Send size={14} />
              </span>
              <span  className='border rounded-full border-white p-1'>
              <Slack size={14} />
              </span>
              <span  className='border rounded-full border-white p-1'>
              <Twitter size={14} />
              </span>
            </div>
      </div>

      <div>
        <p>Powered by <strong>NIFATABLES</strong></p>
      </div>
    </div>
 </Container>
  )
}

export default Footer