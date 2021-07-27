import Link from "../UI/Link";
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
			<Link href="/work" className={introClasses["landing-page-button"]}>
				See My Work
			</Link>
		</section>
	);
};

export default Intro;
