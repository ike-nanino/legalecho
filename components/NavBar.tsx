"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"




const links = [
    {
        name: 'H0ME',
        path: '/',
    },
    {
        name: 'ABOUT',
        path: '/about',
    },
    {
        name: 'PRACTICE AREAS',
        path: '/practice-areas',
    },
    // {
    //     name: 'PUBLICATION',
    //     path: '/publication',
    // },
    {
        name: 'CONTACT',
        path: '/contact',
    }, 
    
]



function NavBar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8 text-xl">
    
    {
        links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-gold font-trajanPro font-regular text-sm'} capitalize hover:text-gold font-trajanPro text-xs ease-in duration-500`}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default NavBar