import { Fragment } from "react";
import Head from "next/head";
import ProfilePic from "../components/Home/ProfilePic";
import Intro from "../components/Home/Intro";
import SocialMediaLinks from "../components/UI/SocialMediaLinks";
import homePageClasses from "../styles/Home/HomePage.module.css";

const HomePage = () => {
	return (
		<Fragment>
			<Head>
				<meta
					name="twitter:title"
					content="Melvin Cayas | Full Stack Web Developer"
				/>
				<meta property="og:url" content="https://www.melvincayas.com" />
				<title>Home | Melvin Cayas</title>
			</Head>
			<div className={homePageClasses.container}>
				<ProfilePic />
				<Intro />
				<SocialMediaLinks />
			</div>
		</Fragment>
	);
};

export default HomePage;
