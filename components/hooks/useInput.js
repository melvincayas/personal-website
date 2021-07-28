import { useState } from "react";

const useInput = () => {
	const [enteredText, setEnteredText] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const onChangeHandler = event => {
		setEnteredText(event.target.value);
	};

	const onBlurHandler = () => {
		setIsTouched(true);
	};

	const isEmpty = enteredText.trim() === "";
	const isError = isTouched && isEmpty;

	return {
		enteredText,
		onChangeHandler,
		onBlurHandler,
		isError,
	};
};

export default useInput;
