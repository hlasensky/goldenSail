import { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { sendEmail } from "../../actions";
import { connect } from "react-redux";

const Email = ({ sendEmail }) => {
	const refForm = useRef();
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
	return (
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
	);
};

const mapStateToProps = (state) => {
	return { email: state.email };
};

export default connect(mapStateToProps, { sendEmail })(Email);
