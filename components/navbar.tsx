'use client'
import React from 'react'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import { FloatingNav } from '~/components/ui/floating-navbar'

export function Navbar() {
   const navItems = [
      {
         name: 'Home',
         link: '/',
         icon: <IconHome className="size-4 text-neutral-500 dark:text-white" />,
      },
      {
         name: 'About',
         link: '/',
         icon: <IconUser className="size-4 text-neutral-500 dark:text-white" />,
      },
      {
         name: 'Contact',
         link: 'mailto:permadeploy@gmail.com',
         icon: (
            <IconMessage className="size-4 text-neutral-500 dark:text-white" />
         ),
      },
   ]
   return (
      <div className="relative  w-full">
         <FloatingNav navItems={navItems} />
      </div>
   )
}
