import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Home/Headline";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main class="mt-6">
				<Headline />
			</main>
		</div>
	);
}

export default App;
