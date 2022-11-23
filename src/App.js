import Navbar from "./components/Navbar";
import Instagram from "./images/instagram.png"
import Linkedin from "./images/linkedin.png"
import Twitter from "./images/twitter.png"
import Github from "./images/github.png"
import Presentation from "./components/Presentation";
import AbouMe from "./components/AbouMe";


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
					<img alt={item.name} src={item.link} className="w-5 h-5 cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"/>
				)
			})}
		</div>

	return (
    	<div className="flex flex-col  ">
			<div className="fixed bottom-0 left-5 text-gray-300 md:flex flex-col justify-center items-center  hidden">
				{mapImages}
				<div className="border-l border-gray-300 h-32 mt-10" />
			</div>
			<div className="fixed bottom-0 right-6 text-gray-300 md:flex flex-col justify-center items-center w-5 hidden">
				<h1 className="text-gray-300 text-sm text-rotate mb-24 font-mono cursor-pointer hover:text-green-300 ">hamzaiantrin1999@gmail.com</h1>
				<div className="border-l border-gray-300 h-32 mt-10" />
			</div>
			<Navbar />
			<Presentation />
			<AbouMe />
    	</div>
	);
}

export default App;
