import Intro from "../components/Home/Intro";
import ProfilePic from "../components/Home/ProfilePic";

const Home = () => {
	return (
		<div className={`columns is-multiline`}>
			<ProfilePic />
			<Intro />
		</div>
	);
};

export default Home;
