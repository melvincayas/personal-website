import NextHead from "../components/UI/NextHead";
import ProfilePic from "../components/Home/ProfilePic";
import Intro from "../components/Home/Intro";
import SocialMediaLinks from "../components/UI/SocialMediaLinks";
import homePageClasses from "../styles/Home/HomePage.module.css";

const HomePage = () => {
	return (
		<NextHead
			twitterTitle="Melvin Cayas | Full Stack Web Developer"
			metaUrl="https://www.melvincayas.com"
			description="Melvin believes in learning-by-doing and loves creating value through problem-solving. His goal is to impact the world with the code he types."
			title="Melvin Cayas | Home"
		>
			<div className={homePageClasses.container}>
				<ProfilePic />
				<Intro />
				<SocialMediaLinks />
			</div>
		</NextHead>
	);
};

export default HomePage;
