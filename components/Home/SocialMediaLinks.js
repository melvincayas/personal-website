import socialMediaClasses from "../../styles/Home/SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
	return (
		<div className={socialMediaClasses.container}>
			<a href="mailto:cayasmj@gmail.com?Subject=Hi,%20Melvin!">
				<i
					className={`far fa-envelope ${socialMediaClasses.btn} ${socialMediaClasses.email}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["github-link"]}
				href="https://github.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-github ${socialMediaClasses.btn} ${socialMediaClasses.github}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["linkedin-link"]}
				href="https://www.linkedin.com/in/melvin-john-cayas-b3122534/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-linkedin ${socialMediaClasses.btn} ${socialMediaClasses.linkedin}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["twitter-link"]}
				href="https://twitter.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-twitter ${socialMediaClasses.btn} ${socialMediaClasses.twitter}`}
				></i>
			</a>
			<a
				className={socialMediaClasses["hashnode-link"]}
				href="https://twitter.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<span
					data-icon="simple-icons:hashnode"
					data-inline="false"
					className="iconify"
				></span>
			</a>
		</div>
	);
};

export default SocialMediaLinks;
