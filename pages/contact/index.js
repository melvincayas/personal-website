import { useContext } from "react";
import { FormContext } from "../../components/store/FormProvider";
import NextHead from "../../components/UI/NextHead";
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
		<NextHead
			twitterTitle="Contact Melvin Cayas"
			metaUrl="https://www.melvincayas.com/contact"
			description="Contact Melvin and make an impact together!"
			title="Melvin Cayas | Contact"
		>
			<Card className={contactClasses.container}>
				{isFillingForm ? <Form /> : <FormReceived />}
				<SocialMediaLinks />
			</Card>
		</NextHead>
	);
};

export default Contact;
