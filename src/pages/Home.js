import Intro from "../components/Home/Intro";
import ProfilePic from "../components/Home/ProfilePic";
import classes from "./styles/Home.module.css";

const Home = () => {
	return (
		<div className={`columns is-multiline ${classes.header}`}>
			<ProfilePic />
			<Intro />
		</div>
	);
};

export default Home;
