import reposReducer from "./reposReducer";
import activeNavReducer from "./activeNavReducer";
import emailReducer from "./emailReducer";
import projectOpenReducer from "./projectOpenReducer";
import repoLanguageReducer from "./repoLanguageReducer";
import repoTechnologiesReducer from "./repoTechnologiesReducer";
import repoDeployments from "./repoRepoDeployments";

const rootReducer = {
	repos: reposReducer,
	active: activeNavReducer,
	email: emailReducer,
	projectDetail: projectOpenReducer,
	languages: repoLanguageReducer,
	technologies: repoTechnologiesReducer,
	deployments: repoDeployments
};

export default rootReducer;
