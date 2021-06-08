import Intro from "./Headline/Intro";
import ProfilePic from "./Headline/ProfilePic";
import classes from "./Headline.module.css";

const Headline = () => {
	return (
		<div className="container">
			<div className={`columns ${classes.stack}`}>
				<Intro />
				<ProfilePic />
			</div>
		</div>
	);
};

export default Headline;
