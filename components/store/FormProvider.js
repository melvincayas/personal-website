import React, { useReducer } from "react";

export const FormContext = React.createContext();

const initialState = {
	counter: 0,
	isSendingForm: false,
	isFillingForm: true,
	isFormReceived: false,
};

const formReducer = (state, action) => {
	switch (action.type) {
		case "SENDING":
			return {
				...state,
				isSendingForm: !state.isSendingForm,
				isFillingForm: !state.isFillingForm,
			};
		case "RECEIVED":
			return {
				...state,
				isFormReceived: !state.isFormReceived,
				isSendingForm: !state.isSendingForm,
			};
		default:
			return initialState;
	}
};

const FormProvider = props => {
	const [formState, dispatch] = useReducer(formReducer, initialState);

	const onFormSubmit = () => {
		dispatch({ type: "SENDING" });
	};

	const onFormReceived = () => {
		dispatch({ type: "RECEIVED" });
	};

	const ctx = {
		isSendingForm: formState.isSendingForm,
		isFillingForm: formState.isFillingForm,
		isFormReceived: formState.isFormReceived,
		onFormSubmit,
		onFormReceived,
	};

	return (
		<FormContext.Provider value={ctx}>{props.children}</FormContext.Provider>
	);
};

export default FormProvider;
