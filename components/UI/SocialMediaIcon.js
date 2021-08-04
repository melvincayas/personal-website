import socialMediaClasses from "../../styles/UI/SocialMediaLinks.module.css";

const SocialMediaIcon = props => {
	return (
		<a
			className={`${socialMediaClasses.link} ${props.className}`}
			target="_blank"
			rel="noreferrer noopener"
			href={props.href}
		>
			{props.children}
		</a>
	);
};

export default SocialMediaIcon;
