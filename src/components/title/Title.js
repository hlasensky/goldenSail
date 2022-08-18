import Spacer from "../spacer/Spacer";

import "./Title.scss";

const Title = ({ title="title" }) => {
	return (
		<div id={title} className="titleContainer">
			<div className="title">{title}</div>
			<Spacer />
		</div>
	);
};

export default Title;
