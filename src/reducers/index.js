import { combineReducers } from "redux";

import reposReducer from "./reposReducer";
import activeNavReducer from "./activeNavReducer";
import emailReducer from "./emailReducer";

export default combineReducers({
	repos: reposReducer,
	active: activeNavReducer,
	email: emailReducer
});
