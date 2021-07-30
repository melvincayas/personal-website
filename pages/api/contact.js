import nextConnect from "next-connect";
import checkInputValidation from "../../middleware/checkInputValidation";
import checkUserValidation from "../../middleware/checkUserValidation";
import sendMail from "../../controllers/sendMail";

const handler = nextConnect()
	.use(checkInputValidation())
	.use(checkUserValidation())
	.post(sendMail);

export default handler;
