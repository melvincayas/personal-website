import nextConnect from "next-connect";
import checkFormValidation from "../../middleware/checkFormValidation";
import sendMail from "../../controllers/sendMail";

const handler = nextConnect().use(checkFormValidation()).post(sendMail);

export default handler;
