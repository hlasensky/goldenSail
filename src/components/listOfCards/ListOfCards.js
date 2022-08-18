import React from "react";
import { connect } from "react-redux";
import { fetchRepos } from "../../actions/index";

import Card from "../card/Card";

import "./ListOfCards.scss"

class ListOfCards extends React.Component {
	componentDidMount() {
		this.props.fetchRepos();
	}

	mapCards(repos) {
		return repos.map(({ id, name, description }) => {
			return <Card key={id} name={name} description={description} />;
		});
	}

	render() {
		return <div className="cardListContainer">{this.mapCards(this.props.repos)}</div>;
	}
}
const mapStateToProps = (state) => {
	return { repos: state.repos };
};

export default connect(mapStateToProps, { fetchRepos })(ListOfCards);
