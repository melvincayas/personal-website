import socialMediaClasses from "../../styles/UI/SocialMediaLinks.module.css";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaLinks = () => {
	return (
		<aside className={socialMediaClasses.container}>
			<SocialMediaIcon
				className={socialMediaClasses["github-link"]}
				href="https://github.com/melvincayas"
			>
				<i className={`fab fa-github ${socialMediaClasses.icon}`}></i>
			</SocialMediaIcon>
			<SocialMediaIcon
				className={socialMediaClasses["linkedin-link"]}
				href="https://www.linkedin.com/in/melvincayas"
			>
				<i className={`fab fa-linkedin ${socialMediaClasses.icon}`}></i>
			</SocialMediaIcon>
			<SocialMediaIcon
				className={socialMediaClasses["twitter-link"]}
				href="https://twitter.com/melvincayas"
			>
				<i className={`fab fa-twitter ${socialMediaClasses.icon}`}></i>
			</SocialMediaIcon>
			<SocialMediaIcon
				className={socialMediaClasses["hashnode-link"]}
				href="https://melvinlearnscode.com"
			>
				<span
					data-icon="simple-icons:hashnode"
					data-inline="false"
					className="iconify"
				></span>
			</SocialMediaIcon>
		</aside>
	);
};

export default SocialMediaLinks;
