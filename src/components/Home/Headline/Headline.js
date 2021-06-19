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
			<div className="columns mt-5">
				<div className="column is-full px-5">
					<p className={`title ${classes.projects}`}>My Projects</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Headline;
