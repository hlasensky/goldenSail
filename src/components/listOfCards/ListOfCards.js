import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions/index";

import Card from "../card/Card";
import CardDetail from "../cardDetail/CardDetail";

import "./ListOfCards.scss";

const ListOfCards = ({ fetchRepos, newRepos, projectDetail, repos }) => {
	useEffect(() => {
		fetchRepos();
	}, [fetchRepos]);

	const mapCards = (repos) => {
		return repos.map(({ id, name, description }) => {
			return (
				<Card key={id} id={id} name={name} description={description} />
			);
		});
	};

	const mapCardsPlusDetail = ({
		id,
		name,
		description,
		html_url,
		languages_url,
		deployments_url,
	}) => {
		return (
			<CardDetail
				key={id}
				id={id}
				name={name}
				description={description}
				html_url={html_url}
				languages_url={languages_url}
				deployments_url={deployments_url}
			/>
		);
	};

	if (!projectDetail.id) {
		return <div className="cardListContainer">{mapCards(repos)}</div>;
	} else {
		return (
			<div className="cardListContainerDetail">
				<div className="scrollReps">{mapCards(newRepos)}</div>
				<div className="detailRep">
					{mapCardsPlusDetail(projectDetail)}
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		repos: state.repos,
		projectDetail: state.projectDetail.clickedProject,
		newRepos: state.projectDetail.newRepos,
	};
};

export default connect(mapStateToProps, { fetchRepos })(ListOfCards);
