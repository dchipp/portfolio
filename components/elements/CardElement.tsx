import React from 'react'
import { useState, useEffect } from 'react'

interface options{
  /**This will be the title shown on the card */
  title: string;
  /**This will be the description shown on the card */
  description: string;
  /**The date the project was made */
  date: string;
  /**The name of the image stored in the public folder */
  imageName?: string;
  /**Add this if you want to include a youtube video instead of an image. This will remove the "Visit" button */
  ytLink?: string;
  /**Add an external link if the service is not youtube. For example, your github repo page */
  link?: string;
}

export default function CardElement(props: options) {
  const isYoutube: boolean  = props.ytLink?true:false;
  const tiltToRight: boolean = Math.floor(Math.random() * 2)?true:false
  return (
    <div className={`card rounded-lg max-w-[370px] bg-background shadow-md flex flex-col overflow-hidden hover:scale-105 transition-all duration-200 ${tiltToRight?"hover:rotate-2":"hover:-rotate-2"} hover:shadow-xl lg:hover:rotate-0 lg:hover:scale-100 lg:hover:shadow-md`}>
      {!isYoutube?
        <img src={`/projects/${props.imageName}.png`} alt={`${props.imageName} placeholder image`} className="aspect-video object-cover w-full sha"/>
      :
        <iframe width="auto" className="aspect-video" allow="fullscreen;" src={`https://www.youtube.com/embed/${props.ytLink}`}>
        </iframe>  
      }
        <div className="text pt-3 px-[10px] ">
          <h3 className="title text-xl font-bold">{props.title}</h3>
        <p className="description text-text-inactive">{props.description}</p>
        <div className="foot text-xs flex w-full flex-nowrap justify-between mt-3 pb-2">
            <span className="date p-2">{props.date}</span>
            {!isYoutube?
            <a href={props.link} className="link flex gap-2 items-center justify-center shadow-sm  hover:shadow-md hover:brightness-110 hover:underline p-2 bg-primary rounded-md text-background lg:text-sm">Visit 
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
            </a>  
            :""
            }
        </div>
        </div>
        
    </div>
  )
}
