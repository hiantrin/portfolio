import Navbar from "./components/Navbar";
import Instagram from "./images/instagram.png"
import Linkedin from "./images/linkedin.png"
import Twitter from "./images/twitter.png"
import Github from "./images/github.png"
import Presentation from "./components/Presentation";
import AbouMe from "./components/AbouMe";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

	const images = [
		{name : "instagtam", link: Instagram},
		{name : "linkedin", link: Linkedin},
		{name : "twitter", link: Twitter},
		{name : "github", link: Github}
	]

	const mapImages = 
		<div className="flex flex-col justify-center items-center space-y-10">
			{images.map((item, id) => {
				return(
					<img key={id} alt={item.name} src={item.link} className="w-5 h-5 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"/>
				)
			})}
		</div>

	return (
    	<div className="flex flex-col  overflow-x-hidden ">
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
	);
}

export default App;
