import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Nav from "../components/nav/Nav";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";

import "./App.scss";

const App = () => {
	return (
		<div itemScope itemType="https://schema.org/CreativeWork" className="App">
			<div className="logoContainer">
				<a href="#home"><img  src="./logo.svg" alt="Logo" /></a>
			</div>
			<Home />
			<About />
			<Projects />
			<Contact />
			<Nav />
		</div>
	);
};

export default App;
