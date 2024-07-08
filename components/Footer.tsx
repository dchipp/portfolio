import React from 'react'

const phone: string = "+39 345 726 4487"
const email: string = "patrickmascia42@gmail.com"
const facebook: string = "https://www.facebook.com/patrick.mascia.42"
const linkedin: string = "https://www.linkedin.com/in/patrickfmascia/"

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="Contact" className='Contact w-full flex flex-col p-3 bg-text-inactive text-background-dark text-sm items-center justify-center'>
      <div className="socials flex gap-5 underline">
        <a href={`tel:${phone}`}>{phone}</a>
        <a href={`mailto:${email}`}>Email</a>
        <a href={facebook}>Facebook</a>
        <a href={linkedin}>LinkedIn</a>
      </div>
      <div className="copyright text-xs text-secondary">
        &copy; Copyright {year} Patrick Francesco Mascia, All Rights Reserved
      </div>
    </footer>
  )
}
