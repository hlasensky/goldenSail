import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

import Title from "../../components/title/Title";

import "./About.scss";

const About = ({ activeNav }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();
	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("about");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div className="section about">
			<Title title={"about me"} />
			<div className="lineContainer">
				<img className="lines" src="./lines.svg" alt="lines" />
			</div>
			<p ref={myRef} className="aboutContent">
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

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(About);
