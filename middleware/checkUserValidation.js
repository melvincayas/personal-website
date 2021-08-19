const checkUserValidation = () => {
	return async (req, res, next) => {
		try {
			require("dotenv").config();
			const SECRET_KEY = process.env.SECRET_KEY;
			const { formToken } = req.body;

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

			next();
		} catch (err) {
			res.status(500).json({
				type: "fail",
				message: "Something went wrong with the server! Please try again.",
			});
		}
	};
};

export default checkUserValidation;
