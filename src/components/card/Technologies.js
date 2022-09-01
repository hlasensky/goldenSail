import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import DropDown from "./DropDown";

const ShowTechnologies = ({ technologies }) => {
	const [open, setOpen] = useState(false);

	const propsAnimationArrow = useSpring({
		transform: open ? " rotate(180deg)" : "rotate(0deg))",
	});

	if (technologies.length !== 0) {
		return (
			<div className="technologies">
				<animated.div onClick={() => setOpen(!open)}>
					Technologies
					<animated.img
						style={propsAnimationArrow}
						className="dropDownArrow"
						src="./dropDownArrow.svg"
						alt=""
					></animated.img>
				</animated.div>
				<ul>
					<DropDown technologies={technologies} open={open} />
				</ul>
			</div>
		);
    } else {
        return null
    }
};

export default ShowTechnologies;
