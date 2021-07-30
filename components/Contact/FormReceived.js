import { Fragment, useContext } from "react";
import { FormContext } from "../store/FormProvider";
import ContactTitle from "./ContactTitle";
import contactClasses from "../../styles/Contact/Contact.module.css";
import ButtonLink from "../UI/ButtonLink";

const FormReceived = () => {
	const { serverResponse, onFormReturn } = useContext(FormContext);

	const contactTitle =
		serverResponse.type === "success" ? "Thank you!" : "Whoops!";

	const buttonText =
		serverResponse.type === "success" ? "Home" : "Back to Form";

	const failButtonClickHandler = event => {
		event.preventDefault();
		onFormReturn();
	};

	return (
		<Fragment>
			<ContactTitle title={contactTitle} />
			<p className={contactClasses["response-message"]}>
				{serverResponse.message}
			</p>
			<ButtonLink
				href={serverResponse.type === "success" ? "/" : ""}
				type={serverResponse.type === "success" ? "" : "button"}
				onClick={
					serverResponse.type === "success" ? "" : failButtonClickHandler
				}
				className={`${contactClasses["contact-button"]} ${contactClasses["response-button"]}`}
			>
				{buttonText}
			</ButtonLink>
		</Fragment>
	);
};

export default FormReceived;
