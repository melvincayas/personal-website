import buttonClasses from "../../styles/UI/Button.module.css";

const Button = props => {
	return (
		<button className={`${buttonClasses.button} ${props.className}`}>
			{props.children}
		</button>
	);
};

export default Button;
