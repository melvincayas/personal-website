import contactClasses from "../../styles/Contact/Contact.module.css";

const Input = props => {
	if (props.type === "textarea") {
		return (
			<textarea
				{...props}
				name={props.name}
				placeholder={props.placeholder}
				className={`${contactClasses.input} ${contactClasses.textarea}`}
				rows="7"
			/>
		);
	}

	return (
		<input
			{...props}
			type={props.type}
			name={props.name}
			placeholder={props.placeholder}
			className={contactClasses.input}
		/>
	);
};

export default Input;
