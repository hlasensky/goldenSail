const repoLanguageReducer = (state = {}, action) => {
	switch (action.type) {
		case "FETCH_REPO_LANGUAGES":
			return action.payload;
		default:
			return state;
	}
};

export default repoLanguageReducer;
