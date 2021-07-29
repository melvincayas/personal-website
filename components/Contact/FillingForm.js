import { Fragment } from "react";
import ContactTitle from "./ContactTitle";
import Form from "./Form";
import SocialMediaLinks from "../UI/SocialMediaLinks";

const FillingForm = () => {
	return (
		<Fragment>
			<ContactTitle title="Let's make an impact together!" />
			<Form />
			<SocialMediaLinks />
		</Fragment>
	);
};

export default FillingForm;
