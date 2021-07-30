const checkFormValidation = handler => {
	return async (req, res) => {
		try {
			require("dotenv").config();
			const SECRET_KEY = process.env.secretKey;
			const { formToken } = req.body;

			if (req.method !== "POST") {
				return res.status(400).json({
					type: "fail",
					message: "Please send your message as a POST request.",
				});
			}

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

			return handler(req, res);
		} catch (err) {
			res.status(500).json({
				type: "fail",
				message: "Something went wrong with the server! Please try again.",
			});
		}
	};
};

export default checkFormValidation;
