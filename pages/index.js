import Intro from "../components/Home/Intro";
import ProfilePic from "../components/Home/ProfilePic";

const Home = () => {
	return (
		<div className={`columns is-multiline`}>
			<Intro />
			<ProfilePic />
		</div>
	);
};

export default Home;
