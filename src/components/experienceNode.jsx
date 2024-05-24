import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const ExperienceNode = ({current}) => {
    console.log(current)
    return (
        <div className='flex  flex-col space-x-6 items-center md:w-[600px]'>
            <div className='flex flex-col items-center'>
                <h1 className='text-gray-300 whitespace-pre text-lg font-mono mt-[5px]'>{current[0].fullTitle} <span className='text-sky-500 font-mono text-lg'>@ {current[0].title === "Noun" ? "Noun Web Services" : current[0].title}</span></h1>
                <h1 className='text-sm font-mon text-gray-400 mt-2'>{current[0].from} - {current[0].to}</h1>
                {current[0].tasks.map((item, id) => {
                    return (
                        <div key={id} className='flex space-x-3 mt-8  md:w-[480px]'>
                            <FontAwesomeIcon icon={faCaretRight} className="text-sky-500 mt-1"/>
                            <h1 className='text-gray-500 text-xs xs:text-sm sm:text-lg'>{item}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExperienceNode