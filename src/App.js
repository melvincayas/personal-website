import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";

const App = () => {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/resume">
					<Resume />
				</Route>
				<Route path="/contact">
					<Resume />
				</Route>

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Layout>
	);
};

export default App;
