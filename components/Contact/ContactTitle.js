import contactClasses from "../../styles/Contact/Contact.module.css";

const ContactTitle = props => {
	return <h1 className={contactClasses.title}>{props.title}</h1>;
};

export default ContactTitle;
