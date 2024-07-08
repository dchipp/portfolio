import React from 'react'
import Image from "next/image"
import Desk from './graphics/Desk'

const years: number = Math.floor((Date.now() - Date.parse("2005-04-05"))/31556952000)

export default function About() {
  return (
    <section id="About" className="About bg-background-dark flex items-center  py-40 gap-20 w-full flex-wrap justify-center lg:pb-10 lg:pt-0 min-h-screen lg:gap-0">
        <Desk/>
        <div className="text flex flex-col max-w-2xl lg:px-7">
          <div className="title text-4xl text-text font-extrabold lg:text-3xl">Who am i?</div>
          <div className="desc pt-5">I am a {years} years old developer born in Italy. 
            I have liked computers and programming ever since I was a child. 
            Throughout the years I've studied, both in school and on my own, in order to learn more and more. 
            Apart from this main interest, I am also into photography, cinematography and philosophy. 
            I have taken part in projects that allowed me to grow those passions and make something unique out of it.
          </div>
        </div>
    </section>
  )
}
