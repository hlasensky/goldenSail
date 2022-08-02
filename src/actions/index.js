import github from "../apis/github";

export const fetchRepos = () => (dispatch) => {
    console.log(1)
    github.get("/repos/hlasensky").then((res) => {
        console.log(res)
		dispatch({
			type: "FETCH_REPOS",
			payload: res,
		});
	});
};