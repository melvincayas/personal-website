import { Fragment } from "react";
import Intro from "../components/Home/Intro";
import ProfilePic from "../components/Home/ProfilePic";
import classes from "./styles/Home.module.css";

const Home = () => {
	return (
		<Fragment>
			<div className={`columns ${classes.header}`}>
				<Intro />
				<ProfilePic />
			</div>
		</Fragment>
	);
};

export default Home;
