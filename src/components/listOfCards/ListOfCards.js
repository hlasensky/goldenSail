import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions/index";
import useMeasure from "react-use-measure";

import Card from "../card/Card";
import CardDetail from "../cardDetail/CardDetail";

import "./ListOfCards.scss";

const ListOfCards = (props) => {
	const [ref, { height }] = useMeasure();

	const fetchRepos = useCallback(() => {
		props.fetchRepos();
	});

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
	}) => {
		return (
			<CardDetail
				key={id}
				id={id}
				name={name}
				description={description}
				html_url={html_url}
				languages_url={languages_url}
			/>
		);
	};

	if (!props.projectDetail.id) {
		return <div className="cardListContainer">{mapCards(props.repos)}</div>;
	} else {
		return (
			<div className="cardListContainerDetail">
				<div style={{ height: height }} className="scrollReps">
					{mapCards(props.newRepos)}
				</div>
				<div ref={ref} className="detailRep">
					{mapCardsPlusDetail(props.projectDetail)}
				</div>
			</div>
		);
	}
};
const mapStateToProps = (state) => {
	console.log(state);
	return {
		repos: state.repos,
		projectDetail: state.projectDetail.clickedProject,
		newRepos: state.projectDetail.newRepos,
	};
};

export default connect(mapStateToProps, { fetchRepos })(ListOfCards);
