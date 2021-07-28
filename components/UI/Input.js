import contactClasses from "../../styles/Contact/Contact.module.css";

const Input = props => {
	if (props.type === "textarea") {
		return (
			<textarea
				name={props.name}
				placeholder={props.placeholder}
				className={`${contactClasses.input} ${contactClasses.textarea}`}
				rows="7"
			/>
		);
	}

	return (
		<input
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			className={contactClasses.input}
		/>
	);
};

export default Input;
