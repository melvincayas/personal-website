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
				className={socialMediaClasses["instagram-link"]}
				href="https://www.instagram.com/melvin.cayas/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<i
					className={`fab fa-instagram p-2 is-size-5 ${socialMediaClasses.btn} ${socialMediaClasses.instagram}`}
				></i>
			</a>
		</div>
	);
};

export default SocialMediaLinks;
