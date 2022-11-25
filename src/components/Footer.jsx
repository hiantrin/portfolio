import React from 'react'
import Instagram from "../images/instagram.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"

const Footer = () => {
    const images = [
		{name : "instagtam", link: Instagram},
		{name : "linkedin", link: Linkedin},
		{name : "twitter", link: Twitter},
		{name : "github", link: Github}
	]
    const mapImages = 
        <div className='flex space-x-10  lg:hidden'>
			{images.map((item, id) => {
				return(
					<img key={id} alt={item.name} src={item.link} className="w-5 h-5 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"/>
				)
			})}
		</div>
  return (
    <div className='flex flex-col space-y-10 justify-center items-center pb-10'>
       {mapImages}
       <h1 className='text-gray-500 text-sm cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 hover:text-green-300'>Built by Hamza Iantrin</h1>
    </div>

  )
}

export default Footer