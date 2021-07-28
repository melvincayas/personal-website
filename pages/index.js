import ProfilePic from "../components/Home/ProfilePic";
import Intro from "../components/Home/Intro";
import SocialMediaLinks from "../components/UI/SocialMediaLinks";
import homePageClasses from "../styles/Home/HomePage.module.css";

const HomePage = () => {
	return (
		<div className={homePageClasses.container}>
			<ProfilePic />
			<Intro />
			<SocialMediaLinks />
		</div>
	);
};

export default HomePage;
