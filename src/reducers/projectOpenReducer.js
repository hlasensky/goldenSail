const projectOpenReducer = (state = {clickedProject: [], newRepos: {}}, action) => {
	switch (action.type) {
		case "OPEN_PROJECT":
			return action.payload;
		default:
			return state;
	}
};

export default projectOpenReducer;
