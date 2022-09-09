const repoDeployments = (state = "", action) => {
	switch (action.type) {
		case "FETCH_REPO_DEPLOYMENTS":
			return action.payload;
		default:
			return state;
	}
};

export default repoDeployments;
