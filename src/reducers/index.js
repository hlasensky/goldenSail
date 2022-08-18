import { combineReducers } from "redux";

import reposReducer from "./reposReducer";
import activeNavReducer from "./activeNavReducer";

export default combineReducers({
	repos: reposReducer,
	active: activeNavReducer,
});
