import useInput from "../hooks/useInput";
import Input from "../UI/Input";
import ButtonLink from "../UI/ButtonLink";
import contactClasses from "../../styles/Contact/Contact.module.css";

const Form = () => {
	const {
		enteredText: enteredName,
		onChangeHandler: nameChangeHandler,
		onBlurHandler: nameBlurHandler,
		isError: isNameError,
	} = useInput();
	const {
		enteredText: enteredEmail,
		onChangeHandler: emailChangeHandler,
		onBlurHandler: emailBlurHandler,
		isError: isEmailError,
	} = useInput();
	const {
		enteredText: enteredSubject,
		onChangeHandler: subjectChangeHandler,
		onBlurHandler: subjectBlurHandler,
		isError: isSubjectError,
	} = useInput();
	const {
		enteredText: enteredMessage,
		onChangeHandler: messageChangeHandler,
		onBlurHandler: messageBlurHandler,
		isError: isMessageError,
	} = useInput();

	const formSubmitHandler = event => {
		event.preventDefault();
	};

	return (
		<form onSubmit={formSubmitHandler} className={contactClasses.form}>
			<Input
				value={enteredName}
				onChange={nameChangeHandler}
				onBlur={nameBlurHandler}
				type="text"
				name="name"
				placeholder={isNameError ? "Please enter a name" : "Name"}
				className={isNameError ? contactClasses["input-error"] : ""}
			/>
			<Input
				value={enteredEmail}
				onChange={emailChangeHandler}
				onBlur={emailBlurHandler}
				type="email"
				name="email"
				placeholder={isEmailError ? "Please enter an email" : "Email"}
				className={isEmailError ? contactClasses["input-error"] : ""}
			/>
			<Input
				value={enteredSubject}
				onChange={subjectChangeHandler}
				onBlur={subjectBlurHandler}
				type="text"
				name="subject"
				placeholder={isSubjectError ? "Please enter a subject" : "Subject"}
				className={isSubjectError ? contactClasses["input-error"] : ""}
			/>
			<Input
				value={enteredMessage}
				onChange={messageChangeHandler}
				onBlur={messageBlurHandler}
				type="textarea"
				name="message"
				placeholder={isMessageError ? "Please enter a message" : "Message"}
				className={isMessageError ? contactClasses["input-error"] : ""}
			/>
			<ButtonLink
				type="button"
				className={contactClasses["send-message-button"]}
			>
				Send Message
			</ButtonLink>
		</form>
	);
};

export default Form;
