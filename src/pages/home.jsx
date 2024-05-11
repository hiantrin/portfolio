import Navbar from "../components/Navbar";
import Instagram from "../images/instagram.png"
import Linkedin from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"
import Presentation from "../components/Presentation";
import AbouMe from "../components/AbouMe";
import Experience from "../components/Experience";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const images = [
		{name : "instagtam", link: Instagram, path: "https://www.instagram.com/hamza_iantrin/"},
		{name : "linkedin", link: Linkedin, path: "https://www.linkedin.com/in/hamza-iantrin-777ba118b/"},
		{name : "twitter", link: Twitter, path: "https://twitter.com/iantrin"},
		{name : "github", link: Github, path: "https://github.com/hiantrin"}
	]

	const mapImages = 
		<div className="flex flex-col justify-center items-center space-y-10">
			{images.map((item, id) => {
				return(
					<img key={id} alt={item.name} src={item.link} className="w-5 h-5 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300" onClick={() => window.open(item.path)} />
				)
			})}
		</div>

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000)
	}, [])
	return (
		<>
			<Loading isLoading={loading} />
				<div className={!loading ? "flex flex-col  overflow-x-hidden " : "hidden"}>
					<div className="fixed bottom-0 left-5 text-gray-300 lg:flex flex-col justify-center items-center  hidden show-footer z-10">
						{mapImages}
						<div className="border-l border-gray-300 h-32 mt-10" />
					</div>
					<div className="fixed bottom-0 right-6 text-gray-300 lg:flex flex-col justify-center items-center w-5 hidden show-footer z-10">
						<h1 className="text-gray-300 text-sm text-rotate mb-24 font-mono cursor-pointer hover:text-sky-500 ">hamzaiantrin1999@gmail.com</h1>
						<div className="border-l border-gray-300 h-32 mt-10" />
					</div>
					<Navbar />
					<Presentation />
					<AbouMe />
					<Experience />
					<Work />
					<Contact />
					<Footer />
				</div>
		</>
	)
}

export default Home