import { Link } from "react-router-dom";
import classes from "./styles/Intro.module.css";

const Intro = () => {
	return (
		<div
			className={`column is-full-mobile is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop is-three-fifths-widescreen is-offset-one-fifth-widescreen px-5 ${classes.intro}`}
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
					<Link
						className={`card-footer-item ${classes["card-links"]}`}
						to="/projects"
					>
						Projects
					</Link>
					<Link
						className={`card-footer-item ${classes["card-links"]}`}
						to="/resume"
					>
						Resume
					</Link>
					<Link
						className={`card-footer-item ${classes["card-links"]}`}
						to="/contact"
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Intro;
