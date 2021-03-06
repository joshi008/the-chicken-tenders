import React, { Suspense } from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	withRouter,
	Redirect,
} from "react-router-dom";
import Login from "./Screens/authentication/Login/Login";
import Signup from "./Screens/authentication/Signup/Signup";
import Card from "./Components/Card/Card";
import "./App.css";

function App() {
	let routes = (
		<BrowserRouter>
			<Switch>
				<Route path="/login" render={(props) => <Login />} />
				<Route path="/signup" render={(props) => <Signup />} />
				<Route path="/card" render={(props) => <Card />} />
			</Switch>
		</BrowserRouter>
	);
	return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}

export default App;
