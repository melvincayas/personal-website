import cardClasses from "../../styles/UI/Card.module.css";

const Card = props => {
	return (
		<div className={`${cardClasses.container} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
