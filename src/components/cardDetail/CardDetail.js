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
}) => {
	useEffect(() => {
		fetchRepoMoreDetail(languages_url);
		fetchRepoMoreDetail(deployments_url);
	}, [fetchRepoMoreDetail, deployments_url, languages_url]);

	return (
		<div>
			<Card
				key={id}
				id={id}
				name={name}
				description={description}
				html_url={html_url}
				languages={languages}
				deployments={deployments}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		deployments: state.deployments,
	};
};

export default connect(mapStateToProps, { fetchRepoMoreDetail })(CardDetail);
