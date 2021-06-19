import { Fragment } from "react";
import Intro from "./Intro";
import ProfilePic from "./ProfilePic";
import classes from "./styles/Headline.module.css";

const Headline = () => {
	return (
		<Fragment>
			<div className={`columns ${classes.header}`}>
				<Intro />
				<ProfilePic />
			</div>
		</Fragment>
	);
};

export default Headline;
