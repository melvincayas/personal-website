import Intro from "../components/Home/Intro";
import ProfilePic from "../components/Home/ProfilePic";
import classes from "./styles/Home.module.css";

const Home = () => {
	return (
		<div className={`columns ${classes.header}`}>
			<Intro />
			<ProfilePic />
		</div>
	);
};

export default Home;
