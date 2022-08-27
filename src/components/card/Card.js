import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { connect } from "react-redux";
import { projectDetail } from "../../actions";

import "./Card.scss";
import Chart from "../chart/Chart";
import DropDown from "./DropDown";

const Card = (props) => {
	const [enter, setEnter] = useState(true);
	const [technologies, setTechnologiesState] = useState([]);
	const [open, setOpen] = useState(false);

	const propsAnimation = useSpring({ width: enter ? 175 : 185 });
	const propsAnimationArrow = useSpring({ transform: open ? " rotate(180deg)"
	: "rotate(0deg))"});

	useEffect(() => {
		if (props.technologies) {
			let newArr = [];
			Object.entries(props.technologies).map(([key, value]) => {
				return (newArr = [...newArr, key]);
			});
			setTechnologiesState([ ...newArr ]);
		}
	}, [props.technologies]);

	const showMoreInfo = () => {
		if (props.languages) {
			return (
				<div className="moreInfo">
					<img src={`${props.name}.png`} alt=""></img>
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

	const showTechnologies = () => {
		if (technologies.length !== 0) {
			return (
				<div className="technologies">
					<animated.div onClick={() => setOpen(!open)}>
						Technologies<animated.img  style={propsAnimationArrow} className="dropDownArrow" src="./dropDownArrow.svg" alt=""></animated.img>
					</animated.div>
					<ul><DropDown technologies={technologies} open={ open } /></ul>
				</div>
			);
		}
	};

	return (
		<div className="cardContainer">
			<div className="ball"></div>
			<div className="cardName">{props.name}</div>
			<div className="cardDescription">{props.description}</div>
			{showMoreInfo()}
			{showTechnologies()}
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
