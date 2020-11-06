import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./pages/home/page.home";
import Login from "./pages/login";

const App: React.FC = () => {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route path="/login" component={Login} />
		</Switch>
	);
};

export default App;
