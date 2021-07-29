import React, { useReducer } from "react";

export const FormContext = React.createContext();

const initialState = {
	isSendingForm: false,
	isFillingForm: true,
	serverResponse: null,
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
				isSendingForm: !state.isSendingForm,
				serverResponse: action.payload,
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

	const onFormReceived = serverResponse => {
		dispatch({ type: "RECEIVED", payload: serverResponse });
	};

	const ctx = {
		isSendingForm: formState.isSendingForm,
		isFillingForm: formState.isFillingForm,
		serverResponse: formState.serverResponse,
		onFormSubmit,
		onFormReceived,
	};

	return (
		<FormContext.Provider value={ctx}>{props.children}</FormContext.Provider>
	);
};

export default FormProvider;
