import { Fragment } from "react";
import ProfilePic from "./ProfilePic";
import Intro from "./Intro";
import SocialMediaLinks from "../UI/SocialMediaLinks";

const Home = () => {
	return (
		<Fragment>
			<ProfilePic />
			<Intro />
			<SocialMediaLinks />
		</Fragment>
	);
};

export default Home;
