import React, { useState } from "react";
import { useSpring, animated} from "@react-spring/web";

import "./Card.scss";

const Card = ({ name, description }) => {
	const [enter, setEnter] = useState(true);
	const props = useSpring({ width: enter ? 175 : 185 });

	return (
		<div className="cardContainer">
			<div className="ball"></div>
			<div className="cardName">{name}</div>
			<div className="cardDescription">{description}</div>
			<animated.div
				onMouseEnter={() => setEnter(!enter)}
				onMouseLeave={() => setEnter(!enter)}
			>
				<div className="buttonCard">view more</div>
				<animated.svg style={props} className="hr"></animated.svg>
			</animated.div>
		</div>
	);
};

export default Card;
