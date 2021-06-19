import Layout from "./components/UI/Layout";
import Headline from "./components/Home/Headline/Headline";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
	return (
		<Layout>
			<Headline />
			<Projects />
		</Layout>
	);
}

export default App;
