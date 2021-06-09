import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Headline from "./components/Home/Headline/Headline";

function App() {
	return (
		<div className="App">
			<Navbar />
			<main class="my-6">
				<Headline />
			</main>
			<Footer />
		</div>
	);
}

export default App;
