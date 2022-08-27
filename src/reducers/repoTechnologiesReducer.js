const repoTechnologiesReducer = (state = {}, action) => {
	switch (action.type) {
		case "FETCH_REPO_TECHNOLOGIES":
			return action.payload;
		default:
			return state;
	}
};

export default repoTechnologiesReducer;
