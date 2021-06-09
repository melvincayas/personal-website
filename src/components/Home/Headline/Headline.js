import Intro from "./Intro";
import ProfilePic from "./ProfilePic";
import Projects from "../Projects/Projects";
import classes from "./styles/Headline.module.css";

const Headline = () => {
	return (
		<div className="container">
			<div className={`columns ${classes.header}`}>
				<Intro />
				<ProfilePic />
			</div>
			<div className="columns mt-5">
				<div className="column is-full px-5">
					<p className={`title ${classes.projects}`}>My Projects</p>
				</div>
			</div>
			<div className={`columns ${classes.projects}`}>
				<Projects />
			</div>
		</div>
	);
};

export default Headline;
