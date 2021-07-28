import Input from "../UI/Input";
import ButtonLink from "../UI/ButtonLink";
import contactClasses from "../../styles/Contact/Contact.module.css";

const Form = () => {
	return (
		<form className={contactClasses.form} type="POST">
			<Input type="text" name="name" placeholder="Name" />
			<Input type="email" name="email" placeholder="Email" />
			<Input type="text" name="subject" placeholder="Subject" />
			<Input type="textarea" name="message" placeholder="Message" />
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
