import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useScrollDirection } from 'react-use-scroll-direction'


const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const [show, setShow] = useState("flex")
    
    useEffect(() => {
        const hideNavbar = () => {
            if (scrollDirection.isScrollingDown === true && window.scrollY >= 40)
                setShow("hidden")
            else if (scrollDirection.isScrollingUp === true)
                setShow("flex")
        }
        hideNavbar();
    }, [scrollDirection])


    const handleClickScroll = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    const title = [
        {number: "01", word: "About", link:"", style: "first-title"},
        {number: "02", word: "Experience", link:"", style: "first-title1"},
        {number: "03", word: "Work", link:"", style: "first-title2"},
        {number: "04", word: "Contact", link:"", style: "first-title3"},
    ]
    const mapTitle = 
        <div className='flex space-x-6 '>
            {title.map((item, id) => {
                return (
                    <div key={id} className={`titles ${item.style} title-navbar` } onClick={() => handleClickScroll(item.word)}>
                        <h1 className='number '>{item.number}.</h1>
                        <h1 className='word'>{item.word}</h1>
                    </div>
                )
            })}
        </div>

  return (
    <div className={`w-full bg-black fixed ${show} justify-between items-center pt-7 pb-2 z-10 px-10`}>
        <Logo />
        <div className='flex space-x-6'>
            {mapTitle}
            <button className='first-title4'>Resume</button>
        </div>
    </div>
  )
}

export default Navbar