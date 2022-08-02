import Title from "../../components/title/Title";

import "./About.scss";

const About = () => {
	return (
		<div className="section about">
			<Title title={"about me"} />
            <div className="lineContainer">
                <img className="lines" src="./lines.svg" alt="lines"/>
            </div>
			<p className="aboutContent">
				I am capable and responsible student eager for experience and
				knowledge<span className="gold">.</span> Learning new things and
				then implementing them is not a problem for me
				<span className="gold">.</span> I am communicative
				<span className="gold">,</span> hardworking
				<span className="gold">,</span> I like to work in a team or
				independently<span className="gold">.</span>
			</p>
		</div>
	);
};

export default About;
