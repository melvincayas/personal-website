import socialMediaClasses from "../../styles/Home/SocialMediaLinks.module.css";

const SocialMediaIcon = props => {
	return (
		<a
			className={`${socialMediaClasses.link} ${props.className}`}
			href={props.href}
			target={props.type === "sameTab" ? "" : "_blank"}
			rel={props.type === "sameTab" ? "" : "noreferrer noopener"}
		>
			{props.children}
		</a>
	);
};

export default SocialMediaIcon;
