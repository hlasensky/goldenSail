import "./Socials.scss";

const Socials = ({ icon, text, url }) => {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<div className="socialsContainer">
				<img alt={text} className="icon" src={icon}/>
				<div className="socialText">{ text }</div>
			</div>
		</a>
	);
};

export default Socials;
