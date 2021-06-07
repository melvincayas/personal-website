import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Home/Headline";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main>
				<Headline />
			</main>
		</div>
	);
}

export default App;
