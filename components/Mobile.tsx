"use client"


import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import Link from "next/link"
import { Badge } from "./ui/badge"

export function Mobile() {
  
  const navLinks =  [
    { soon: false, name: "Cedron Link", "url": "/" },
    { soon: true, name: "Token", "url": "/about" },
    { soon: true, name: "AI Revenue", "url": "/shop" },
    { soon: true, name:  "AI Launchpad ", "url": "/contact" }
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-white text-black"><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle asChild><div className="">
          <Button className='border-2 border-white text-white  bg-transparent'>
                Connect
            </Button>
            </div></SheetTitle>
        </SheetHeader>
        <div className='flex flex-col mt-8 gap-4'>

              <ul className='flex flex-col text-black gap-6'>
                {
                  navLinks.map((link) => (
                    <li key={link.name}>
                      <Link href='/' className='text-sm text-white'>
                          {link.name} {link.soon && <Badge className='text-[#AB23FF] text-[12px]'>SOON</Badge>}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            
            </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
