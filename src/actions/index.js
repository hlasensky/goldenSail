import _ from "lodash";
import emailjs from "@emailjs/browser";
import { Buffer } from "buffer";

import github from "../apis/github";

export const fetchRepos = () => (dispatch) => _FetchRepos(dispatch); //fetch repositories from github api and memoize them
const _FetchRepos = _.memoize((dispatch) => {
	github
		.get("/users/hlasensky/repos")
		.then((res) => {
			const fetchData = res.data.sort((a, b) => b.id - a.id);
			dispatch({
				type: "FETCH_REPOS",
				payload: fetchData,
			});
		})
		.catch((err) => {
			dispatch({
				type: "FETCH_REPOS",
				payload: [],
			});
		});
});

export const fetchRepoTechnologies = (name) => (dispatch) => {
	const makeArgument = { name: name, dispatch: dispatch };
	_fetchRepoTechnologies(makeArgument);
};
const _fetchRepoTechnologies = _.memoize((makeArgument) => { //fetching technologies from package.json for clicked repo 
	github
		.get(
			`https://api.github.com/repos/hlasensky/${makeArgument.name}/contents/package.json`
		)
		.then((res) => {
			const content = Buffer.from(res.data.content, "base64").toString();
			const str = JSON.parse(content);
			return makeArgument.dispatch({
				type: "FETCH_REPO_TECHNOLOGIES",
				payload: str.dependencies,
			});
		})
		.catch((err) => {
			return makeArgument.dispatch({
				type: "FETCH_REPO_TECHNOLOGIES",
				payload: {},
			});
		});
});

export const fetchRepoMoreDetail = (url) => (dispatch) => {
	const makeArgument = { url: url, dispatch: dispatch };
	_fetchRepoMoreDetail(makeArgument);
};
const _fetchRepoMoreDetail = _.memoize((makeArgument) => { //fetching languages used in clicked repo
	github
		.get(makeArgument.url)
		.then((res) => {
			return makeArgument.dispatch({
				type: "FETCH_REPO_LANGUAGES",
				payload: res.data,
			});
		})
		.catch((err) => {
			return makeArgument.dispatch({
				type: "FETCH_REPO_LANGUAGES",
				payload: {},
			});
		});
});

export const fetchRepoDeployments = (url) => (dispatch) => {
	const makeArgument = { url: url, dispatch: dispatch };
	_fetchRepoDeployments(makeArgument);
};
const _fetchRepoDeployments = _.memoize((makeArgument) => { //fetching deployment url for clicked repo
	github
		.get(makeArgument.url)
		.then((res) => {
			return makeArgument.dispatch({
				type: "FETCH_REPO_DEPLOYMENTS",
				payload: res.data[0].payload.web_url,
			});
		})
		.catch((err) => {
			return makeArgument.dispatch({
				type: "FETCH_REPO_DEPLOYMENTS",
				payload: "",
			});
		});
});

export const activeNav = (nav) => { //storing name of section that is currently showing
	return {
		type: "ACTIVE_NAV",
		payload: nav,
	};
};

export const projectDetail = (projectID, repos) => {//storing repo that is currently clicked
	const clickedProject = repos.filter((repo) => repo.id === projectID);
	const newRepos = [
		...repos.filter((repo) => repo.id !== clickedProject[0].id),
	];
	return {
		type: "OPEN_PROJECT",
		payload: { clickedProject: clickedProject[0], newRepos },
	};
};

export const sendEmail = (e) => (dispatch) => { // sending email
	const envVar = process.env.REACT_APP_PUBLIC_KEY;
	e.preventDefault();

	emailjs
		.sendForm("service_nl60pke", "template_wfk0cag", e.target, envVar)
		.then(
			(result) => {
				console.log(result.text);
				dispatch({
					type: "SEND_EMAIL",
					payload: result.text,
				});
			},
			(error) => {
				console.log(error.text);
			}
		);
	e.target.reset();
};
