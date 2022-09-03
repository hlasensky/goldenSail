import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { animated } from "@react-spring/web";
import React, { useEffect } from "react";

import Spacer from "../../components/spacer/Spacer";

import "./Home.scss";

const Home = ({ activeNav }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView({
		threshold: 0.3,
	});

	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("home");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div id="home" className="section homeContainer">
			<div>
				<div className="nameContainer">
					<h1 ref={myRef}>
						TOMÁŠ
						<br />
						HLÁSENSKÝ
					</h1>
				</div>
				<Spacer />
				<div className="subTitle">web designer / programmer</div>
			</div>
			<animated.div className="mtTrContainer">
				<div className="miniTitle">
					<h2>PORTFOLIO</h2>
				</div>
				<img
					className="triContainer"
					src="./mid-tri.svg"
					alt="Triangle"
				/>
			</animated.div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(Home);
