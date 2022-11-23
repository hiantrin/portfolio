import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    const title = [
        {number: "01", word: "About", link:""},
        {number: "02", word: "Experience", link:""},
        {number: "03", word: "Work", link:""},
        {number: "04", word: "Contact", link:""},
    ]
    const mapTitle = 
        <div className='flex space-x-6'>
            {title.map((item, id) => {
                return (
                    <div key={id} className='titles'>
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
            <button>Resume</button>
        </div>
    </div>
  )
}

export default Navbar