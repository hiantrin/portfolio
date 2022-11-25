import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Contact = () => {
    const myRef = useRef();
	const [myElement, setMyElement] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if ( (myRef.current.offsetTop + 100) <= (window.pageYOffset + window.innerHeight))
				setMyElement(true);
		}
		document.addEventListener('scroll',handleScroll);
		return () => {
		  document.removeEventListener('scroll',handleScroll);
		}
	}, [myRef])
  return (
    <div id="Contact" ref={myRef} className={!myElement ? "opacity-0 " : 'flex w-full flex-col items-center  reveal pb-10 mb-28'}>
        <h1 className='text-lg text-green-300 text-mono font-mono mb-6'>04. <span className='text-gray-300 text-xl  font-bold'>What's next</span></h1>
        <h1 className='text-5xl text-gray-300  font-bold mb-8'>Get In Touch</h1>
        <div className='flex text-center w-[600px]'>
            <h1 className='text-lg text-gray-500 mb-14'>I’m always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, you are welcome, i will get back to you!</h1>
        </div>
        <button className='p-4 text-lg font-mono border-[1px]'>Say hello</button>
    </div>
  )
}

export default Contact