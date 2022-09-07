import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import "./index.scss";
import App from "./app/App";
import reducers from "./reducers";

import "babel-polyfill";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
