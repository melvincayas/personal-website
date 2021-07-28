import Card from "../../components/UI/Card";
import ContactTitle from "../../components/Contact/ContactTitle";
import Form from "../../components/Contact/Form";
import SocialMediaLinks from "../../components/UI/SocialMediaLinks";
import contactClasses from "../../styles/Contact/Contact.module.css";

const Contact = () => {
	return (
		<Card className={contactClasses.container}>
			<ContactTitle />
			<Form />
			<SocialMediaLinks />
		</Card>
	);
};

export default Contact;
