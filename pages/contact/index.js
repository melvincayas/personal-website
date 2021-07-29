import Card from "../../components/UI/Card";
import FillingForm from "../../components/Contact/FillingForm";
import contactClasses from "../../styles/Contact/Contact.module.css";

const Contact = () => {
	// isSendingMessage
	// isFillingForm
	// isFormReceived

	return (
		<Card className={contactClasses.container}>
			<FillingForm />
		</Card>
	);
};

export default Contact;
