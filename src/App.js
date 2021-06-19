import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Headline from "./components/Home/Headline/Headline";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
	return (
		<Fragment>
			<Navbar />
			<div className="App container">
				<main class="columns my-6">
					<div className="column is-10 is-offset-1">
						<Headline />
						<Projects />
					</div>
				</main>
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
