import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ExperienceBar from './experienceBar';
import ExperienceNode from './experienceNode';

const allExperiences = [
    "DropLeet",
    "1337Labs",
    "Agenz",
    "Noun",
    "NEO DMCC",
    "WiPoker"
]

const allExperiencesInfos = [
    {
        title: "DropLeet",
        fullTitle: "Full Stack web developer",
        from: "May 2021",
        to: "October 2021",
        tasks : [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Node js, React, and Next js.",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.",
            "I was responsable in my enternship for creating a web application that allows users to rent cars and see prices in all the country and get in touch with rental agences."
        ]
    },
    {
        title: "1337Labs",
        fullTitle: "Full Stack web developer",
        from: "July 2022",
        to: "December 2022",
        tasks : [
            "Successfully navigated diverse freelance projects for various clients, collaborating with different teams to deliver tailored solutions and meet project objectives.",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Node js, React, and Next js.",
        ]
    },
    {
        title: "Agenz",
        fullTitle: "Full Stack web developer",
        from: "junuary 2023",
        to: "April 2023",
        tasks : [
            "Upgrade AGENZ web application of online services whose mission is to bring transparency to the real estate market in Morocco.",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Redux, Node js, mongoDB, and Next js.",
            "Communicate with multi-disciplinary teams of engineers, designers, on a daily basis.",
            "I was responsable in my enternship for upgrade and create multiple new features on the application."
        ]
    },
    {
        title: "Noun",
        fullTitle: "Full Stack web developer",
        from: "May 2023",
        to: "October 2023",
        tasks : [
           "Create a user-friendly web application for managing apartment and villa rentals.",
           "Simplify booking processes and provide real-time property availability monitoring.",
           "Prioritize user experience with intuitive interfaces catering to both property owners and tenants, ensuring a smooth and efficient interaction throughout."
        ]
    },
    {
        title: "NEO DMCC",
        fullTitle: "React Native Developer",
        from: "November 2023",
        to: "Feb 2024",
        tasks : [
            "Team leader of team contains front-end developer, back-end developer and designer",
            "Introducing a revolutionary health app, facilitating virtual consultations between doctors and patients through seamless video calls.",
            "Integrated health devices sync with the app, enabling patients to share real-time results with doctors.",
            "The app streamlines the entire process, from diagnosis to prescription, with a convenient in- app payment system for a comprehensive healthcare experience.",
            "Talk to the client, gather requirements, and create detailed specifications for the project."
        ]
    },
    {
        title: "WiPoker",
        fullTitle: "React Native Developer",
        from: "Mars 2024",
        to: "May 2024",
        tasks : [
            "Developed Wipoker, a multiplayer mobile poker game featuring real-time gameplay, intuitive controls, and stunning graphics. Implemented various poker styles, enabling players to compete globally or with friends.",
            "Focused on delivering an authentic and engaging user experience through meticulous design and development.",
            "Develop back-end and mobile app and manage play store of the client and the server.",
            "Talk to the client, gather requirements, and create detailed specifications for the project."
        ]
    },
]

const Experience = () => {
    const myRef = useRef();
	const [myElement, setMyElement] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if ( (myRef.current.offsetTop + 200) <= (window.pageYOffset + window.innerHeight))
				setMyElement(true);
		}
		document.addEventListener('scroll',handleScroll);
		return () => {
		  document.removeEventListener('scroll',handleScroll);
		}
	}, [myRef])

    const [currentExperience, setCurrentExperience] = useState("DropLeet")
    return (
        <div id="Experience" ref={myRef}  className={!myElement ? "opacity-0 mt-20" : 'flex flex-col w-full py-28  px-10 sm:pl-[8%]  lg:pl-[20%] 2xl:pl-[25%] space-y-6 reveal mt-40 '}>
            <div className='flex  items-center mb-10 space-x-7'>
                <div className="min-w-max">
                    <h1 className='text-md  sm:text-xl md:text-2xl text-sky-500 text-mono font-mono '>02. <span className='text-gray-300 text-lg sm:text-2xl md:text-3xl  font-bold'>Where I've Worked</span></h1>
                </div>
                <div className='w-full md:w-[250px] h-[1px] bg-gray-500 rounded-xl '></div>
            </div>
            <div className="flex flex-col gap-20">
                <ExperienceBar allExperiences={allExperiences} current={currentExperience} setCurrent={setCurrentExperience}/>
                <ExperienceNode current={allExperiencesInfos.filter((item) => item.title === currentExperience)}/>
            </div>
           
        </div>
        
  )
}

export default Experience