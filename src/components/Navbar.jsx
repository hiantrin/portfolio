import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    
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
                    <div key={id} className={`titles ${item.style} title-navbar` }>
                        <h1 className='number '>{item.number}.</h1>
                        <h1 className='word'>{item.word}</h1>
                    </div>
                )
            })}
        </div>
  return (
    <div className='w-full bg-black fixed flex justify-between items-center pt-7 pb-2 z-10 px-10'>
        <Logo />
        <div className='flex space-x-6'>
            {mapTitle}
            <button className='first-title4'>Resume</button>
        </div>
    </div>
  )
}

export default Navbar