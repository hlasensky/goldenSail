import "./Socials.scss";

const Socials = ({ icon, text }) => {
	return (
		<div className="socialsContainer">
			<img alt={text} className="icon" src={icon}/>
			<div className="socialText">{ text }</div>
		</div>
	);
};

export default Socials;
