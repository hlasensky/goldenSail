import { combineReducers } from "redux";

import reposReducer from "./reposReducer";
import activeNavReducer from "./activeNavReducer";
import emailReducer from "./emailReducer";
import projectOpenReducer from "./projectOpenReducer";
import repoLanguageReducer from "./repoLanguageReducer";

export default combineReducers({
	repos: reposReducer,
	active: activeNavReducer,
	email: emailReducer,
	projectDetail: projectOpenReducer,
	languages: repoLanguageReducer,
});
