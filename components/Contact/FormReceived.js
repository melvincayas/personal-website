import { Fragment, useContext } from "react";
import { FormContext } from "../store/FormProvider";
import ContactTitle from "./ContactTitle";
import contactClasses from "../../styles/Contact/Contact.module.css";
import ButtonLink from "../UI/ButtonLink";

const FormReceived = () => {
	const { serverResponse } = useContext(FormContext);

	const contactTitle =
		serverResponse.type === "success" ? "Thank you!" : "Whoops!";

	return (
		<Fragment>
			<ContactTitle title={contactTitle} />
			<p className={contactClasses["response-message"]}>
				{serverResponse.message}
			</p>
			<ButtonLink
				href="/"
				className={`${contactClasses["contact-button"]} ${contactClasses["response-button"]}`}
			>
				Home
			</ButtonLink>
		</Fragment>
	);
};

export default FormReceived;
