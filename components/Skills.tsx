import React from 'react'
import Image from 'next/image'
import SkillElement from '@/components/elements/SkillElement'

export default function Skills() {
  return (
    <section id="Skills" className="Skills flex items-center  py-40 w-full flex-wrap justify-center h-auto lg:py-10 lg:px-5 flex-col">
        <div className="title text-4xl text-text font-extrabold lg:text-3xl">What can i do?</div>
        <div className="images flex gap-5 w-full justify-evenly flex-wrap pt-20 pb-20 lg:pb-5 lg: items-center">
          <SkillElement image="html"/>
          <SkillElement image="css"/>
          <SkillElement image="tailwind"/>
          <SkillElement image="js"/>
          <SkillElement image="react"/>
          <SkillElement image="nextjs"/>
          <SkillElement image="vuejs"/>
          <SkillElement image="typescript"/>
          <SkillElement image="php"/>
          <SkillElement image="mysql"/>
        </div>
        <p className='lg:text-center'>I am always learning new aspects, skills and things I don't currently know.</p>
    </section>
  )
}
