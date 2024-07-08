"use client";

import React from 'react'
import { useEffect, useState } from "react";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY>(window.innerHeight - 100)){
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
      };
  
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
    }, []);

  return (
    <a href="#Header" className={`ToTop transition-all duration-200 right-4 bottom-16 rounded-full bg-primary h-16 w-16 flex items-center fixed opacity-100 justify-center shadow-md drop-shadow-md  hover:brightness-110  hover:shadow-lg hover:drop-shadow-lg z-50 ${isVisible ? '' : 'opacity-[0] pointer-events-none'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="white" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
        </svg>
    </a>
  )
};
export default ToTop;