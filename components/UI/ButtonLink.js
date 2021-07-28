import linkClasses from "../../styles/UI/ButtonLink.module.css";

const ButtonLink = props => {
	return (
		<a href={props.href} className={`${props.className} ${linkClasses.link}`}>
			{props.children}
		</a>
	);
};

export default ButtonLink;
