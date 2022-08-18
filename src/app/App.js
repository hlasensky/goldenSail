import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Nav from "../components/nav/Nav";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";

import "./App.scss";

const App = () => {
	return (
		<div className="App">
			<div className="logoContainer">
				<img src="./logo.svg" alt="Logo" />
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
