const sendMail = async (req, res) => {
	try {
		require("dotenv").config();
		const EMAIL = process.env.email;
		const PASSWORD = process.env.password;
		const PERSONAL_EMAIL = process.env.personalEmail;
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
			to: PERSONAL_EMAIL,
			subject: `"${enteredSubject}" from ${enteredName}`,
			text: `${enteredMessage} ${enteredName} at ${enteredEmail}`,
			html: `<div><p>${enteredMessage}</p><p>${enteredName} at ${enteredEmail}</p></div>`,
		};

		const info = await transporter.sendMail(emailMessage);

		if (info.accepted.length === 0) {
			return res.status(500).json({
				type: "fail",
				message: "Something went terribly wrong! Please try again.",
			});
		}

		res.status(200).json({
			type: "success",
			message:
				"Your message has been sent! I'll get back to you as soon as I can.",
		});
	} catch (err) {
		res.status(500).json({
			type: "fail",
			message: "Something went wrong with the server! Please try again.",
		});
	}
};

export default sendMail;
