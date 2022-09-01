import _ from "lodash";
import emailjs from "@emailjs/browser";
import { Buffer } from "buffer";

import github from "../apis/github";

export const fetchRepos = () => (dispatch) => _FetchRepos(dispatch);
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

export const fetchRepoTechnologies = (name) => (dispatch) =>
	_fetchRepoTechnologies(name, dispatch);
const _fetchRepoTechnologies = _.memoize((name, dispatch) => {
	github
		.get(`https://api.github.com/repos/hlasensky/${name}/contents/package.json`)
		.then((res) => {
			const content = Buffer.from(res.data.content, "base64").toString();
			const str = JSON.parse(content);
			dispatch({
				type: "FETCH_REPO_TECHNOLOGIES",
				payload: str.dependencies,
			});
		})
		.catch((err) => {
			dispatch({
				type: "FETCH_REPO_TECHNOLOGIES",
				payload: {},
			});
		});
});

export const fetchRepoMoreDetail = (url) => (dispatch) =>
	_fetchRepoMoreDetail(url, dispatch);
const _fetchRepoMoreDetail = (url, dispatch) => {
	github
		.get(url)
		.then((res) => {
			console.log(url)
			dispatch({
				type: "FETCH_REPO_LANGUAGES",
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: "FETCH_REPO_LANGUAGES",
				payload: {},
			});
		});
};

export const activeNav = (nav) => {
	return {
		type: "ACTIVE_NAV",
		payload: nav,
	};
};

export const projectDetail = (projectID, repos) => {
	const clickedProject = repos.filter((repo) => repo.id === projectID);
	const newRepos = [
		...repos.filter((repo) => repo.id !== clickedProject[0].id),
	];
	return {
		type: "OPEN_PROJECT",
		payload: { clickedProject: clickedProject[0], newRepos },
	};
};

export const sendEmail = (e) => (dispatch) => {
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
