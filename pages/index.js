import { Fragment } from "react";
import NextHead from "../components/UI/NextHead";
import Script from "next/script";
import ProfilePic from "../components/Home/ProfilePic";
import Intro from "../components/Home/Intro";
import SocialMediaLinks from "../components/UI/SocialMediaLinks";
import homePageClasses from "../styles/Home/HomePage.module.css";

const HomePage = () => {
	return (
		<Fragment>
			<NextHead
				twitterTitle="Melvin Cayas | Full Stack Web Developer"
				metaUrl="https://www.melvincayas.com"
				description="Melvin believes in learning-by-doing and loves creating value through problem-solving. His goal is to impact the world with the code he types."
				title="Melvin Cayas | Home"
			/>
			<Script
				src="https://code.iconify.design/1/1.0.7/iconify.min.js"
				strategy="beforeInteractive"
			></Script>
			<div className={homePageClasses.container}>
				<ProfilePic />
				<Intro />
				<SocialMediaLinks />
			</div>
		</Fragment>
	);
};

export default HomePage;
