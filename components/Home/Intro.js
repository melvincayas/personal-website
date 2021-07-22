import Link from "next/link";
import classes from "../../styles/Home/Intro.module.css";

const Intro = () => {
	return (
		<div
			className={`column is-full-mobile is-full-tablet is-three-fifths-desktop is-three-fifths-desktop is-three-fifths-widescreen px-5 ${classes.intro}`}
		>
			<div className="card">
				<div className="card-content">
					<p className="subtitle has-text-black">
						Hi, I'm Melvin! I'm a self-taught web developer in NYC currently
						working as an electrical engineer.
					</p>
					<p className="subtitle has-text-black">
						I discovered coding during the 2020 pandemic and fell in love with
						it! Creating value through problem-solving always puts me into flow
						state.
					</p>
					<p className="subtitle has-text-black">
						I'm proficient with the MERN stack, but I'm always learning more.
						It's my belief that we stop growing when we stop learning.{" "}
						<span className="has-text-danger-dark">#NeverStopLearning</span>
					</p>
					<p className="subtitle has-text-black">
						My goal is to change the world with the code I type. I hope to hear
						from you if our goals align!
					</p>
				</div>
				<div className="card-footer">
					<Link href="/projects">
						<a className={`card-footer-item ${classes["card-links"]}`}>
							Projects
						</a>
					</Link>
					<Link href="/resume">
						<a className={`card-footer-item ${classes["card-links"]}`}>
							Resume
						</a>
					</Link>
					<Link href="/contact">
						<a className={`card-footer-item ${classes["card-links"]}`}>
							Contact
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Intro;
