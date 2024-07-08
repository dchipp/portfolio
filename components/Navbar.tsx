import React from 'react'
import NavElement from "@/components/elements/NavElement"

export default function Navbar() {
  return (
    <nav className='border-b-[1px] border-text-inactive fixed w-full z-50 bg-background'>
        <div className="main-nav flex justify-between px-20 py-5 text-xl text-text-inactive md:justify-center">
            <a href='/' className='font-extrabold text-2xl text-text md:hidden'>Patrick</a>
            <ul className='elements flex gap-10 justify-evenly md:gap-5'>
                <li className='md:hidden'><NavElement route={"#Header"} text={"Home"}/></li>
                <li><NavElement route={"#About"} text={"About"}/></li>
                <li><NavElement route={"#Skills"} text={"Skills"}/></li>
                <li><NavElement route={"#Projects"} text={"Projects"}/></li>
                <li><NavElement route={"#Contact"} text={"Contact"}/></li>
            </ul>
        </div>
    </nav>
  )
}
