import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { connect } from "react-redux";
import { projectDetail } from "../../actions";

import "./Card.scss";
import Chart from "../chart/Chart";

const Card = (props) => {
	const [enter, setEnter] = useState(true);
	const propsAnimation = useSpring({ width: enter ? 175 : 185 });

	const showChart = () => {
		if (props.languages) {
			return (
				<div className="cardChart">
					<Chart languages={props.languages } />
				</div>
			);
		}
	};

	return (
		<div className="cardContainer">
			<div className="ball"></div>
			<div className="cardName">{props.name}</div>
			<div className="cardDescription">{props.description}</div>
			{showChart()}
			<animated.div
				onMouseEnter={() => setEnter(!enter)}
				onMouseLeave={() => setEnter(!enter)}
				onClick={() => {
					if (!props.html_url) {
						props.projectDetail(props.id, props.repos);
					} else {
						window.open(props.html_url);
					}
				}}
			>
				<div className="buttonCard">view more</div>
				<animated.svg
					style={propsAnimation}
					className="hr"
				></animated.svg>
			</animated.div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { projectDetail: state.projectDetail, repos: state.repos };
};

export default connect(mapStateToProps, { projectDetail })(Card);
