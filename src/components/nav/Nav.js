import { connect } from "react-redux";

import "./Nav.scss";

const Nav = ({active}) => {
	return (
		<div className="navContainer">
			<hr className="lLine"></hr>
			<div className="textNavContainer">
				<div className={active === "home" ? "textNav active" : "textNav" }>
					<a href="#home">home</a>
				</div>
			</div>
			<hr className="sLine"></hr>
			<div className="textNavContainer">
				<div className={active === "about" ? "textNav active" : "textNav" }>
					<a href="#about me">about</a>
				</div>
			</div>
			<hr className="sLine"></hr>
			<div className="textNavContainer">
				<div className={active === "projects" ? "textNav active" : "textNav" }>
					<a href="#projects">projects</a>
				</div>
			</div>
			<hr className="sLine"></hr>
			<div className="textNavContainer">
				<div className={active === "contact" ? "textNav active" : "textNav" }>
					<a href="#contact">contact</a>
				</div>
			</div>
			<hr className="lLine"></hr>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { active: state.active };
};

export default connect(mapStateToProps)(Nav);
