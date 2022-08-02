import React from "react";
import {connect} from "react-redux"
import { fetchRepos } from "../../actions/index"

class Projects extends React.Component {
    componentDidMount() {
        this.props.fetchRepos()
    }

    render() { 
        return (<div>
            Projects
            {console.log(this.props.repos)}
        </div>);
    }
}
const mapStateToProps = (state) => {
	return {repos: state.repos}
}

export default connect(mapStateToProps, {fetchRepos})(Projects);