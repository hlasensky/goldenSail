import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

import Title from "../../components/title/Title";

import "./About.scss";

const About = ({ activeNav }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView({
		threshold: 0.01,
	});
	
	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("about");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div itemscope itemtype="https://schema.org/about" className="section about">
			<Title title={"about me"} />
			<img className="lines" src="./lines.svg" alt="lines" />
			<p itemprop="description" className="aboutContent">
				My name is Tomáš Hlásenský<span className="gold">.</span> I am a capable and responsible student eager for experience and
				knowledge
				<span className="gold">
				.
				</span> Learning new things and implementing them is not a problem
				for me
				<span className="gold">.</span> I am communicative
				<span ref={myRef} className="gold">,</span> hardworking and independent<span className="gold">.</span> I like to work in a teams<span className="gold">,</span> but I enjoy working alone<span className="gold">,</span> too<span className="gold">.</span>
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(About);
