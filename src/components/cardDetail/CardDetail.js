import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
	fetchRepoMoreDetail,
	fetchRepoTechnologies,
	fetchRepoDeployments
} from "../../actions/index";

import Card from "../card/Card";

const CardDetail = ({
	id,
	name,
	description,
	html_url,
	languages_url,
	deployments_url,
	languages,
	deployments,
	screenShot,
	technologies,
	
	fetchRepoMoreDetail,
	fetchRepoTechnologies,
	fetchRepoDeployments
}) => {

	useEffect(() => {
		fetchRepoMoreDetail(languages_url);
		fetchRepoDeployments(deployments_url);
		fetchRepoTechnologies(name);
	}, [
		id,
		deployments_url,
		languages_url,
		name,
		fetchRepoMoreDetail,
		fetchRepoTechnologies,
		fetchRepoDeployments
	]);

	return (
		<Card
			key={id}
			id={id}
			name={name}
			description={description}
			html_url={html_url}
			languages={languages}
			deployments={deployments}
			screenShot={screenShot}
			technologies={technologies}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		deployments: state.deployments,
		technologies: state.technologies,
	};
};

export default connect(mapStateToProps, {
	fetchRepoMoreDetail,
	fetchRepoTechnologies,
	fetchRepoDeployments
})(CardDetail);
