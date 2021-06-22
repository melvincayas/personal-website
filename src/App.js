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
				<Route path="/" exact component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/resume" component={Resume} />
				<Route path="/contact" component={Resume} />
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Layout>
	);
};

export default App;
