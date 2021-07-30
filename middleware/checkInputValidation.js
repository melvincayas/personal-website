const checkInputValidation = () => {
	return (req, res, next) => {
		const { enteredName, enteredEmail, enteredSubject, enteredMessage } =
			req.body;

		const isNameNull = enteredName.trim() === "";
		const isEmailNull = enteredEmail.trim() === "";
		const isSubjectNull = enteredSubject.trim() === "";
		const isMessageNull = enteredMessage.trim() === "";

		if (isNameNull || isEmailNull || isSubjectNull || isMessageNull) {
			return res.status(400).json({
				type: "fail",
				message: "Please fill everything out.",
			});
		}

		next();
	};
};

export default checkInputValidation;
