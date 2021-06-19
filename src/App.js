import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Headline from "./components/Home/Headline/Headline";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import "./App.css";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Headline />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/resume">
					<Resume />
				</Route>
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
