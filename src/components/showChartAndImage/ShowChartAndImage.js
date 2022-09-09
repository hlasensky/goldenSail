import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import Chart from "../chart/Chart";

const ShowChartAndImage = (props) => {
	const [enter, setEnter] = useState(true);
	const [windowWidth, setWindowWidth] = useState(1920);

	const propsAnimation = useSpring({ width: enter ? 85 : 95 });
	const propsAnimation2 = useSpring({ width: enter ? 50 : 60 });

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const showDeploy = (deployment) => {
		if (deployment) {
			return (
				<animated.div
					className="hrViewSite"
					onMouseEnter={() => setEnter(!enter)}
					onMouseLeave={() => setEnter(!enter)}
					onClick={() => {
						window.open(deployment);
					}}
				>
					<div className="buttonCard">view site</div>
					<animated.svg
						style={
							windowWidth > 800 ? propsAnimation : propsAnimation2
						}
						className="hr"
					></animated.svg>
				</animated.div>
			);
		} else {
			return null;
		}
	};

	if (props.languages) {
		return (
			<div className="chartAndImage">
				<img src={`./${props.name}.png`} alt=""></img>
				{showDeploy(props.deployments)}
				<div className="cardChart">
					<Chart key={props.languages} languages={props.languages} />
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default ShowChartAndImage;
