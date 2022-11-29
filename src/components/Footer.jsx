import React from 'react'
import Instagram from "../images/instagram.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"

const Footer = () => {
    const images = [
		{name : "instagtam", link: Instagram, path: "https://www.instagram.com/hamza_iantrin/"},
		{name : "linkedin", link: Linkedin, path: "https://www.linkedin.com/in/hamza-iantrin-777ba118b/"},
		{name : "twitter", link: Twitter, path: "https://twitter.com/iantrin"},
		{name : "github", link: Github, path: "https://github.com/hiantrin"}
	]
    const mapImages = 
        <div className='flex space-x-10  lg:hidden'>
			{images.map((item, id) => {
				return(
					<img key={id} alt={item.name} src={item.link} className="w-5 h-5 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.open(item.path)}/>
				)
			})}
		</div>
  return (
    <div className='flex flex-col space-y-10 justify-center items-center pb-10'>
       {mapImages}
       <h1 className='text-gray-500 text-sm cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-sky-500'>Built by Hamza Iantrin</h1>
    </div>

  )
}

export default Footer