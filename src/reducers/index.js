import { combineReducers } from "redux"

import reposReducer from "./reposReducer"


export default combineReducers({
    repos: reposReducer
})