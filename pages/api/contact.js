export default function messageHandler(req, res) {
	require("dotenv").config();
	const EMAIL = process.env.email;
	const PASSWORD = process.env.password;
	const PERSONALEMAIL = process.env.personalEmail;
	const nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: EMAIL,
			pass: PASSWORD,
		},
		secure: true,
	});

	const { enteredName, enteredEmail, enteredSubject, enteredMessage } =
		req.body;

	const emailMessage = {
		from: EMAIL,
		to: PERSONALEMAIL,
		subject: `"${enteredSubject}" from ${enteredName}`,
		text: `${enteredMessage} ${enteredName} at ${enteredEmail}`,
		html: `<div><p>${enteredMessage}</p><p>${enteredName} at ${enteredEmail}</p></div>`,
	};

	if (req.method === "POST") {
		transporter.sendMail(emailMessage, function (err, info) {
			if (err) {
				return res.status(500).json({
					type: "fail",
					message: "Something went terribly wrong! Please try again.",
				});
			}

			return res.status(200).json({
				type: "success",
				message:
					"Your message has been sent! Please give me time to get back to you.",
			});
		});
	} else {
		return res.status(500).json({
			type: "fail",
			message: "Please send your message as a POST request.",
		});
	}
}
