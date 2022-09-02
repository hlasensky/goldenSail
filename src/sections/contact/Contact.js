import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

import Title from "../../components/title/Title";
import Socials from "../../components/socials/Socials";
import Email from "../../components/email/Email";

import "./Contact.scss";

const Contact = ({ activeNav, email }) => {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	const checkProps = useSpring({
		from: { x: 0 },
		x: email === "OK" ? 1 : 0,
		config: { duration: 1500 },
	});

	const showCheck = () => {
		if (email === "OK") {
			return (
				<animated.div
					style={{
						scale: checkProps.x.to({
							range: [
								0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
								0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.98, 1,
							],
							output: [
								0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1, 0.97,
								0.9, 1.1, 0.9, 1.1, 1.03, 1, 0,
							],
						}),
					}}
					className="checkContainer"
				>
					<animated.img className="check" src="./check.svg" alt="" />
				</animated.div>
			);
		}
	};

	useEffect(() => {
		if (myElementIsVisible) {
			activeNav("contact");
		}
	}, [myElementIsVisible, activeNav]);

	return (
		<div className="section contact">
			<Title title={"contact"} />
			<div className="contactContainer">
				<div ref={myRef} className="socialHalf">
					<Socials
						icon={"./github.svg"}
						text={"hlasensky"}
						url={"https://github.com/hlasensky"}
					/>
					<Socials
						icon={"./instagram.svg"}
						text={"@_hlasensky_"}
						url={"https://www.instagram.com/_hlasensky_/"}
					/>
					<Socials
						icon={"./email.svg"}
						text={"tomas.hlasensky@seznam.cz"}
						url={"mailto: tomas.hlasensky@seznam.cz"}
					/>
				</div>

				<div className="socialHalf">
					<Email />
					{showCheck()}
				</div>
			</div>

			<div className="mtTrConContainer">
				<img
					className="triConContainer"
					src="./con-tri.svg"
					alt="Triangle"
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active, email: state.email };
};

export default connect(mapStateToProps, { activeNav })(Contact);
