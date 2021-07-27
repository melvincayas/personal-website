import socialMediaClasses from "../../styles/Home/SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
	return (
		<div>
			<a href="mailto:cayasmj@gmail.com?Subject=Hi,%20Melvin!">
				<i
					className={`far fa-envelope p-2 is-size-5 ${socialMediaClasses.btn} ${socialMediaClasses.email}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["github-link"]}
				href="https://github.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-github mx-1 p-2 is-size-5 ${socialMediaClasses.btn} ${socialMediaClasses.github}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["linkedin-link"]}
				href="https://www.linkedin.com/in/melvin-john-cayas-b3122534/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-linkedin p-2 is-size-5 ${socialMediaClasses.btn} ${socialMediaClasses.linkedin}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["twitter-link"]}
				href="https://twitter.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-twitter p-2 is-size-5 ${socialMediaClasses.btn} ${socialMediaClasses.twitter}`}
				></i>
			</a>
		</div>
	);
};

export default SocialMediaLinks;
