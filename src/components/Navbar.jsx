import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useScrollDirection } from 'react-use-scroll-direction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const scrollDirection = useScrollDirection();
    const [slide, setSlide] = useState(false)
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

    const mapPhone =
        <div className="w-full h-full flex flex-col items-center justify-center space-y-10">
            {title.map((item, id) => {
                return (
                    <div key={id} className="flex flex-col w-full items-center space-y-2 cursor-pointer" onClick={() => handleClickScroll(item.word)}>
                        <h1 className='text-sky-500 font-mono'>{item.number}.</h1>
                        <h1 className='text-gray-300 font-mono text-xl'>{item.word}</h1>
                    </div>
                )
            })}
            <a href='/resume.pdf' target='_blank'><button className="text-lg px-10 mt-10">Resume</button></a> 
        </div>
  return (
    <div className={`w-full bg-black fixed ${show} justify-between items-center pt-7 pb-2 z-10 px-10 relative `}>
        <Logo />
        <FontAwesomeIcon icon={!slide ? faBarsStaggered : faXmark}  className={!slide ? "text-sky-500 flex md:hidden text-2xl cursor-pointer first-title z-10" : "text-sky-500 text-4xl z-10 cursor-pointer"} onClick={() => setSlide(!slide)}/>
        <div className='md:flex space-x-6 hidden '>
            {mapTitle}
           <a href='/resume.pdf' target='_blank'><button className='first-title4'>Resume</button></a> 
        </div>
        <div className={slide ? "absolute w-[70%] h-screen  bg-black right-0 top-0 flex flex-col md:hidden slide" : "slide-right absolute w-[70%] h-screen z-10 bg-black right-0 top-0 flex flex-col md:hidden"}>
            {mapPhone}
        </div>
    </div>
  )
} 

export default Navbar