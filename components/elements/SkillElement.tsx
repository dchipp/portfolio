import React from 'react'

export default function SkillImage({image}: {image: string}) {
  return (
    <div className='w-28 h-auto justify-center items-center drop-shadow-md transition-all duration-200 hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl'>
        <img src={`/icons/${image}.png`} alt={`${image} icon`} className='h-full w-full object-contain'/>
    </div>
  )
}
