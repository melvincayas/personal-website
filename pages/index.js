import Home from "../components/Home/Home";
import homePageClasses from "../styles/Home/HomePage.module.css";

const HomePage = () => {
	return (
		<div className={homePageClasses.container}>
			<Home />
		</div>
	);
};

export default HomePage;
