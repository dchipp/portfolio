import React from 'react'
import CardElement from './elements/CardElement'

export default function Projects() {
  return (
    <section id="Projects" className="Projects bg-background-dark flex items-center flex-col py-40 px-10 h-auto lg:py-10 lg:px-5 2xl:gap-10">
        <h1 className="name text-4xl text-text font-extrabold lg:text-3xl">What have I made?</h1>
        <div className="cards h-full w-full flex flex-wrap justify-center gap-20 pt-32 lg:pt-2 lg:gap-10">
        <CardElement 
          title="VR with domotics" 
          description='Group project with the goal of controlling a real life domotic envirnoment through a VR headset.' 
          date="14/01/2024" 
          ytLink='DExpecqtsRk'/>
          <CardElement 
          title="Film tracker" 
          description='This website with a PHP backend was made because i wanted an easy way to annotate and mark films as i watch them.' 
          date="06/04/2024"
          imageName='filmtracker'
          link='https://masciacorporation.altervista.org/it/progetti/film/home.php'/>
        <CardElement 
          title="Community map | Interview #3" 
          description='Interviewing people on the streets to learn their ideas and thoughts about my hometown.' 
          date="21/03/2023" 
          ytLink='8ksPBLrMYqw'/>
        <CardElement 
          title="Community map | Interview #2" 
          description='Interviewing people on the streets to learn their ideas and thoughts about my hometown.' 
          date="21/03/2023" 
          ytLink='-ty-9AcCIPQ'/>
        <CardElement 
          title="Community map | Interview #1" 
          description='Interviewing people on the streets to learn their ideas and thoughts about my hometown.' 
          date="21/03/2023" 
          ytLink='PixStsA_1p4'/>
        <CardElement 
          title="Introduction to Community Map" 
          description='Cinematography, editing, and audio recording combined to interview people and learn more about my hometown.' 
          date="04/03/2023" 
          ytLink='OuGzW9fhIi8'/>
          <CardElement
          title="TicTacToe website"
          description='Simple tictactoe against pure luck. Made to redesign my original tictactoe as it was highly unoptimized.'
          date="18/01/2023"
          imageName='tictactoe'
          link="https://github.com/dchipp/tictactoe"/>
          <CardElement
          title="Analog clock"
          description='This is an analog clock i made using JS. It is a sequel to my previous clock, made for someone else.'
          date="17/12/2022"
          imageName='analogClock'
          link="https://github.com/dchipp/analogClock"/>
          <CardElement
          title="7 segment clock"
          description='This is a 7 segment display clock i made using JS. I made it because i wanted a wallpaper for my computer.'
          date="02/12/2022"
          imageName='clock'
          link="https://github.com/dchipp/clock"/>
        </div>
    </section>
  )
}
