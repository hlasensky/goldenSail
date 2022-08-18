import { useInView } from "react-intersection-observer";
import { activeNav } from "../../actions";
import { connect } from "react-redux";
import { useEffect } from "react";

import Title from "../../components/title/Title";
import Socials from "../../components/socials/Socials";

import "./Contact.scss";

const Contact = ({ activeNav }) => {
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
					<Socials icon={"./github.svg"} text={"hlasensky"} />
					<Socials icon={"./instagram.svg"} text={"@_hlasensky_"} />
					<Socials
						icon={"./email.svg"}
						text={"tomas.hlasensky@seznam.cz"}
					/>
				</div>

				<div className="socialHalf">
					<form className="contactForm" name="contact">
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
						<button className="submit" type="submit">
							send
						</button>
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
	return { active: state.active };
};

export default connect(mapStateToProps, { activeNav })(Contact);
