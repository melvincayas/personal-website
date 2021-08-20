import ButtonLink from "../UI/ButtonLink";
import introClasses from "../../styles/Home/Intro.module.css";

const Intro = () => {
	return (
		<section className={introClasses["section-container"]}>
			<article className={introClasses["text-container"]}>
				<header className={introClasses.title}>
					Hi, I&apos;m <strong>Melvin</strong>!
				</header>
				<p className={introClasses.subtitle}>
					I&apos;m a <strong>full stack web developer</strong> who believes in
					learning-by-doing and loves creating value through problem-solving. My
					goal is to impact the world with the code I type.
				</p>
			</article>
			<ButtonLink href="/work" className={introClasses["landing-page-button"]}>
				See My Work
			</ButtonLink>
		</section>
	);
};

export default Intro;
