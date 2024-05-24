import React from 'react'

const ExperienceBar = ({allExperiences, current, setCurrent}) => {
  return (
    <div className='flex flex-wrap h-10 gap-3 '>
        {allExperiences.map((item, id) => {
            return (
                <button key={id} className={current === item ? "bg-sky-500 text-black font-bold" : ""} onClick={() => setCurrent(item)}>{item}</button>
            )
        })}
    </div>
  )
}

export default ExperienceBar