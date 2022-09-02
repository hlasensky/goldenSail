import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { connect } from "react-redux";
import { projectDetail } from "../../actions";

import "./Card.scss";
import Chart from "../chart/Chart";
import ShowTechnologies from "./Technologies";

const Card = (props) => {
	const [enter, setEnter] = useState(true);
	const [technologies, setTechnologiesState] = useState([]);
	const [windowWidth , setWindowWidth] = useState(1920);

	const propsAnimation = useSpring({ width: enter ? 175 : 185 });
	const propsAnimation2 = useSpring({ width: enter ? 100 : 120 });

	useEffect(() => {
		setWindowWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		if (props.technologies) {
			let newArr = [];
			Object.entries(props.technologies).map(([key, value]) => {
				return (newArr = [...newArr, key]);
			});
			setTechnologiesState([...newArr]);
		}
	}, [props.technologies]);

	const showChartAndImage = () => {
		if (props.languages) {
			return (
				<div className="chartAndImage">
					<img src={`./${props.name}.png`} alt=""></img>
					<div className="cardChart">
						<Chart
							key={props.languages}
							languages={props.languages}
						/>
					</div>
				</div>
			);
		}
	};

	return (
		<div className="cardContainer">
			<div className="ball"></div>
			<div className="cardName">{props.name}</div>
			<div className="cardDescription">{props.description}</div>
			<div className="moreInfo">
				{showChartAndImage()}
				<ShowTechnologies technologies={technologies} />
			</div>
			<animated.div
				className="hrViewMore"
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
					style={windowWidth > 800 ? propsAnimation : propsAnimation2}
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
