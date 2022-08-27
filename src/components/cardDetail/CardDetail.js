import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepoMoreDetail } from "../../actions/index";

import Card from "../card/Card";

import "./CardDetail.scss";

const CardDetail = ({
	id,
	name,
	description,
	html_url,
	languages_url,
	deployments_url,
	fetchRepoMoreDetail,
	languages,
	deployments,
	screenShot,
	technologies,
}) => {
	useEffect(() => {
		fetchRepoMoreDetail(languages_url);
		/*fetchRepoMoreDetail(deployments_url);*/
		fetchRepoMoreDetail(
			`https://api.github.com/repos/hlasensky/${name}/contents/package.json`
		);
	}, [fetchRepoMoreDetail, deployments_url, languages_url, name]);

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

export default connect(mapStateToProps, { fetchRepoMoreDetail })(CardDetail);
