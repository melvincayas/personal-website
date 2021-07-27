import linkClasses from "../../styles/UI/Link.module.css";

const Link = props => {
	return (
		<a href={props.href} className={`${props.className} ${linkClasses.link}`}>
			{props.children}
		</a>
	);
};

export default Link;
