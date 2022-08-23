import React from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions/index";

import Card from "../card/Card";
import CardDetail from "../cardDetail/CardDetail";

import "./ListOfCards.scss";

class ListOfCards extends React.Component {
	componentDidMount() {
		this.props.fetchRepos();
	}

	mapCards(repos) {
		return repos.map(({ id, name, description }) => {
			return (
				<Card key={id} id={id} name={name} description={description} />
			);
		});
	}

	mapCardsPlusDetail({ id, name, description, html_url, languages_url }) {
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
	}

	render() {
		if (!this.props.projectDetail.id) {
			return (
				<div className="cardListContainer">
					{this.mapCards(this.props.repos)}
				</div>
			);
		} else {
			return (
				<div className="cardListContainerDetail">
					<div className="scrollReps">
						{this.mapCards(this.props.newRepos)}
					</div>
					<div className="detailRep">
						{this.mapCardsPlusDetail(this.props.projectDetail)}
					</div>
				</div>
			);
		}
	}
}
const mapStateToProps = (state) => {
	return {
		repos: state.repos,
		projectDetail: state.projectDetail.clickedProject,
		newRepos: state.projectDetail.newRepos,
	};
};

export default connect(mapStateToProps, { fetchRepos })(ListOfCards);
