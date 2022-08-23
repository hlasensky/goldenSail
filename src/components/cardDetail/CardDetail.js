import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepoLanguage } from "../../actions/index";

import Card from "../card/Card";

import "./CardDetail.scss";

const CardDetail = ({
	id,
	name,
	description,
	html_url,
	languages_url,
	fetchRepoLanguage,
	languages,
}) => {
	useEffect(() => {
		fetchRepoLanguage(languages_url);
	}, [fetchRepoLanguage, languages_url]);

	return (
		<div>
			<Card
				key={id}
				id={id}
				name={name}
				description={description}
				html_url={html_url}
				languages={languages}
			/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		languages: state.languages,
	};
};

export default connect(mapStateToProps, { fetchRepoLanguage })(CardDetail);
