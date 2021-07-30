import linkClasses from "../../styles/UI/ButtonLink.module.css";
import Link from "next/link";

const ButtonLink = props => {
	if (props.type === "button") {
		return (
			<button
				onClick={props.onClick}
				className={`${props.className} ${linkClasses.link}`}
			>
				{props.children}
			</button>
		);
	}

	return (
		<Link href={props.href} passHref>
			<a className={`${props.className} ${linkClasses.link}`}>
				{props.children}
			</a>
		</Link>
	);
};

export default ButtonLink;
