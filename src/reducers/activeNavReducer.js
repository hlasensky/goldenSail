const activeNavReducer = (state = "home", action) => {
	switch (action.type) {
		case "ACTIVE_NAV":
			return action.payload;
		default:
			return state;
	}
};

export default activeNavReducer;
