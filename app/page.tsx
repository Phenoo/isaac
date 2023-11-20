import Hero from '@/components/sections/Hero'
import Offers from '@/components/sections/Offers'
import Pass from '@/components/sections/Pass'
import Profit from '@/components/sections/Profit'
import Prospect from '@/components/sections/Prospect'
import Vision from '@/components/sections/Vision'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" min-h-screen space-y-12">
      <Hero />   
      <Pass />
      <Profit />
      <Vision />
      <Offers  />
      <Prospect />
    </main>
  )
}
