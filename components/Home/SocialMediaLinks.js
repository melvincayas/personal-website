import socialMediaClasses from "../../styles/Home/SocialMediaLinks.module.css";

const SocialMediaLinks = () => {
	return (
		<div className={socialMediaClasses.container}>
			<a
				className={socialMediaClasses.link}
				href="mailto:cayasmj@gmail.com?Subject=Hi,%20Melvin!"
			>
				<i className={`far fa-envelope ${socialMediaClasses.icon}`}></i>
			</a>
			<a
				className={`${socialMediaClasses["github-link"]} ${socialMediaClasses.link}`}
				href="https://github.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i className={`fab fa-github ${socialMediaClasses.icon}`}></i>
			</a>
			<a
				className={`${socialMediaClasses["linkedin-link"]} ${socialMediaClasses.link}`}
				href="https://www.linkedin.com/in/melvin-john-cayas-b3122534/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i className={`fab fa-linkedin ${socialMediaClasses.icon}`}></i>
			</a>
			<a
				className={`${socialMediaClasses["twitter-link"]} ${socialMediaClasses.link}`}
				href="https://twitter.com/melvincayas"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i className={`fab fa-twitter ${socialMediaClasses.icon}`}></i>
			</a>
			<a
				className={`${socialMediaClasses["hashnode-link"]} ${socialMediaClasses.link}`}
				href="https://melvinlearnscode.com"
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
