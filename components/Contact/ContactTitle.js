import contactClasses from "../../styles/Contact/Contact.module.css";

const ContactTitle = props => {
	return <h1 className={contactClasses.header}>{props.title}</h1>;
};

export default ContactTitle;
