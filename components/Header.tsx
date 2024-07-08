import React from 'react'
import Image from "next/image";

export default function Header() {
  return (
    <section id="Header" className="Header flex items-center py-40 gap-20 w-full flex-wrap justify-center lg:py-20 min-h-screen">
        <div className="left flex flex-col max-w-2xl lg:order-2">
          <div className="text flex flex-col lg:px-7">
            <div className="intro text-base text-secondary">Hello everyone, I am</div>
            <h1 className="name text-4xl text-text font-extrabold lg:text-3xl">Patrick Francesco Mascia</h1>
            <p className="subtext text-base text-text pt-5">Web and software developer who is always learning, wishing to improve and further fulfil knowledge on IT subjects and feilds. Passion is the key to a happy life.</p>
          </div>
          <div className="buttons flex justify-center gap-10 pt-6 lg:gap-5">
            <a href="/Patrick-Francesco-Mascia_CV.pdf" className=" button flex gap-3 px-6 py-3 border-[1px] border-primary bg-primary rounded-md text-background shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110">Download CV <Image src="/download-icon-white.png" alt="Download icon" width={22} height={22}  className="flex-shrink-0 object-cover"></Image></a>
            <a href="#Contacts" className=" flex gap-3 px-6 py-3 border-[1px] border-accent bg-secondary rounded-md text-text-inactive shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110">Contact me</a>
          </div>
        </div>
        <div className="right relative w-80 h-96 overflow-hidden rounded-3xl lg:order-1">
          <div className="backdrop bg-primary w-full rounded-3xl h-4/5 bottom-0 px-5 absolute shadow-lg drop-shadow-lg"></div>
          <Image src="/portrait.png" alt="A picture of myself" width={240} height={240} className="drop-shadow-md h-full bottom-0 left-1/2 -translate-x-1/2 absolute object-cover hover:scale-105 hover:rotate-6 transition-all duration-200 overflow-visible"></Image>
        </div>
      </section>
  )
}
