import { Fragment } from "react";
import Head from "next/head";
import { useContext } from "react";
import { FormContext } from "../../components/store/FormProvider";
import Card from "../../components/UI/Card";
import LoadingScreen from "../../components/UI/LoadingScreen";
import Form from "../../components/Contact/Form";
import SocialMediaLinks from "../../components/UI/SocialMediaLinks";
import FormReceived from "../../components/Contact/FormReceived";
import contactClasses from "../../styles/Contact/Contact.module.css";

const Contact = () => {
	const { isSendingForm, isFillingForm } = useContext(FormContext);

	if (isSendingForm) return <LoadingScreen />;

	return (
		<Fragment>
			<Head>
				<meta name="twitter:title" content="Contact Melvin Cayas" />
				<meta property="og:url" content="https://www.melvincayas.com/Contact" />
				<title>Contact | Melvin Cayas</title>
			</Head>
			<Card className={contactClasses.container}>
				{isFillingForm ? <Form /> : <FormReceived />}
				<SocialMediaLinks />
			</Card>
		</Fragment>
	);
};

export default Contact;
