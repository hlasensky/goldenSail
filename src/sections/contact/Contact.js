import { useInView } from "react-intersection-observer";
import { activeNav, sendEmail } from "../../actions";
import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

import Title from "../../components/title/Title";
import Socials from "../../components/socials/Socials";

import "./Contact.scss";

const Contact = ({ activeNav, sendEmail }) => {
	const [enter, setEnter] = useState(true);
	const props = useSpring({
		opacity: enter ? " 1" : "0",
	});
	const props2 = useSpring({
		bottom: enter ? -5 : 4,
		right: enter ? -25 : -20,
		transform: enter
			? " rotate(180deg) translateX(0px) scale(0.1)"
			: "rotate(0deg) translateX(25px) scale(1)",
	});

	const refForm = useRef();

	const { ref: myRef, inView: myElementIsVisible } = useInView();
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
					<form
						className="contactForm"
						onSubmit={sendEmail}
						name="contact"
						ref={refForm}
					>
						<div className="contactInputs">
							<input
								required
								className="inp name"
								name="name"
								placeholder="name"
								type="text"
							/>
							<input
								required
								className="inp email"
								name="email"
								placeholder="email"
								type="email"
							/>
						</div>
						<textarea
							required
							className="inp message"
							name="message"
							placeholder="message"
							rows="5"
						></textarea>
						<br />
						<animated.button
							onMouseEnter={() => setEnter(!enter)}
							onMouseLeave={() => setEnter(!enter)}
							className="submit"
							type="submit"
						>
							<animated.div
								style={props}
								className="submitBall"
							></animated.div>
							<animated.img
								src="./arrow.svg"
								style={props2}
								className="arrow"
							></animated.img>
							send
						</animated.button>
					</form>
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

export default connect(mapStateToProps, { activeNav, sendEmail })(Contact);
