import Button from "../UI/Button";
import introClasses from "../../styles/Home/Intro.module.css";

const Intro = () => {
	return (
		<section>
			<p className={introClasses.title}>
				Hi, I'm <strong>Melvin</strong>!
			</p>
			<p className={introClasses.subtitle}>
				I'm a <strong>full stack web developer</strong> who believes in
				learning-by-doing and loves creating value through problem-solving. My
				goal is to impact the world with the code I type.
			</p>
			<Button className={introClasses["landing-page-button"]}>
				See My Work
			</Button>
		</section>
	);
};

export default Intro;
