import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

import Spacer from "../../components/spacer/Spacer";

import "./Home.scss";

const Home = ({ activeNav }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();
	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("home");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div ref={myRef} id="home" className="section homeContainer">
			<div>
				<div className="nameContainer">
					TOMÁŠ
					<br />
					HLÁSENSKÝ
				</div>
				<Spacer />
				<div className="subTitle">web designer / programmer</div>
			</div>
			<div className="mtTrContainer">
				<div className="miniTitle">PORTFOLIO</div>
				<img
					className="triContainer"
					src="./mid-tri.svg"
					alt="Triangle"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(Home);
