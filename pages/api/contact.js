export default async function messageHandler(req, res) {
	try {
		require("dotenv").config();
		const SECRET_KEY = process.env.secretKey;
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

		if (req.method !== "POST") {
			return res.status(400).json({
				type: "fail",
				message: "Please send your message as a POST request.",
			});
		}

		const {
			enteredName,
			enteredEmail,
			enteredSubject,
			enteredMessage,
			formToken,
		} = req.body;

		const response = await fetch(
			"https://www.google.com/recaptcha/api/siteverify",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${SECRET_KEY}&response=${formToken}`,
			}
		);

		const result = await response.json();

		if (!result.success) {
			return res.status(403).json({
				type: "fail",
				message:
					"Something went wrong with the form verification! Please try again.",
			});
		}

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
				"Your message has been sent! Please give me time to get back to you.",
		});
	} catch (err) {
		res.status(500).json({
			type: "fail",
			message: "Something went wrong with the server! Please try again.",
		});
	}
}
