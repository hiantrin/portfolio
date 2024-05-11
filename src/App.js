
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from "./pages/terms";
import Home from "./pages/home"




function App() {
	

	return (
		<Router>
			<Routes>
		  		<Route path="/" element={<Home />} />
		  		<Route path="/terms" element={<Terms />} />
			</Routes>
	  </Router>
			
    	
	);
}

export default App;
