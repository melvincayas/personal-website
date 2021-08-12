import { Fragment, useState, useContext } from "react";
import { FormContext } from "../store/FormProvider";
import useInput from "../hooks/useInput";
import Input from "../UI/Input";
import ButtonLink from "../UI/ButtonLink";
import ContactTitle from "./ContactTitle";
import ReCAPTCHA from "react-google-recaptcha";
import contactClasses from "../../styles/Contact/Contact.module.css";

/*global fetch*/
/*global process*/

const Form = () => {
	const [isTriedToSubmit, setIsTriedToSubmit] = useState(false);
	const [formToken, setFormToken] = useState(null);
	const { onFormSubmit, onFormReceived } = useContext(FormContext);
	const {
		enteredText: enteredName,
		onChangeHandler: nameChangeHandler,
		onBlurHandler: nameBlurHandler,
		isError: isNameError,
		isEmpty: isNameEmpty,
	} = useInput();
	const {
		enteredText: enteredEmail,
		onChangeHandler: emailChangeHandler,
		onBlurHandler: emailBlurHandler,
		isError: isEmailError,
		isEmpty: isEmailEmpty,
	} = useInput();
	const {
		enteredText: enteredSubject,
		onChangeHandler: subjectChangeHandler,
		onBlurHandler: subjectBlurHandler,
		isError: isSubjectError,
		isEmpty: isSubjectEmpty,
	} = useInput();
	const {
		enteredText: enteredMessage,
		onChangeHandler: messageChangeHandler,
		onBlurHandler: messageBlurHandler,
		isError: isMessageError,
		isEmpty: isMessageEmpty,
	} = useInput();

	const onCheckboxChange = token => {
		setFormToken(token);
	};

	const formSubmitHandler = async event => {
		event.preventDefault();

		if (
			isNameEmpty ||
			isEmailEmpty ||
			isSubjectEmpty ||
			isMessageEmpty ||
			!formToken
		) {
			setIsTriedToSubmit(true);
			return;
		}

		onFormSubmit();

		const payload = {
			enteredName,
			enteredEmail,
			enteredSubject,
			enteredMessage,
			formToken,
		};

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		const result = await response.json();

		onFormReceived(result);
	};

	return (
		<Fragment>
			<ContactTitle title={"Let's make an impact together!"} />
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
				<div className={contactClasses["recaptcha-container"]}>
					<ReCAPTCHA
						sitekey={process.env.sitekey}
						onChange={onCheckboxChange}
					/>
				</div>
				<ButtonLink type="button" className={contactClasses["contact-button"]}>
					{isTriedToSubmit ? "Please fill everything out" : "Send Message"}
				</ButtonLink>
			</form>
		</Fragment>
	);
};

export default Form;
