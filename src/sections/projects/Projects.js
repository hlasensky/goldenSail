import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

import ListOfCards from "../../components/listOfCards/ListOfCards";
import Title from "../../components/title/Title";

import "./Projects.scss";

const Projects = ({ activeNav }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView({
		threshold: 0,
	});
	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("projects");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div className="section projects">
			<Title title={"projects"} />
			<span className="projectSpan">
				<span ref={myRef}>
					<ListOfCards />
				</span>
				<div className="mtTrProContainer">
					<img
						className="triProContainer"
						src="./pro-tri.svg"
						alt="Triangle"
					/>
				</div>
			</span>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(Projects);
